"use strict";
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op;
  const measurements = sequelize.define(
    "measurements",
    {
      sensor_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      value: DataTypes.DOUBLE
    },
    {
      scopes: {
        lastMeasurement: {
          order: [["createdAt", "DESC"]]
        }
      }
    }
  );
  measurements.associate = models => {
    measurements.belongsTo(models.plants, { foreignKey: "plant_id" });
    measurements.belongsTo(models.sensors, { foreignKey: "sensor_id" });
  };

  measurements.range7Days = (endDateStr, plants_model) => {
    let endDate = new Date(endDateStr);
    console.log(endDate);
    let startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);
    console.log(startDate);
    return new Promise((resolve, reject) => {
      measurements
        .findAll({
          where: {
            createdAt: {
              $lte: endDate,
              $gt: startDate
            }
          }
        })
        .then(res => resolve(JSON.stringify(res)))
        .catch(err => reject(err));
    });
  };

  measurements.measurements = (plantID, onlyLast) => {
    return new Promise((resolve, reject) => {
      let query;
      if (onlyLast) {
        query = measurements.findAll({
          where: {
            plant_id: { [Op.eq]: plantID }
          },
          limit: 1
        });
      } else {
        query = measurements.findAll({
          where: {
            plant_id: { [Op.eq]: plantID }
          }
        });
      }
      query
        .then(values => {
          resolve(JSON.stringify(values));
        })
        .catch(() => {
          reject("can't get measurements");
        });
    });
  };
  return measurements;
};
