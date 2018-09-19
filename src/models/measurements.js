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

  measurements.range7Days = endDateStr => {
    let endDate = new Date(endDateStr);
    let startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);
    return new Promise((resolve, reject) => {
      measurements
        .findAll({
          where: {
            createdAt: {
              $lte: endDate,
              $gt: startDate
            }
          },
          order: [["plant_id", "ASC"], ["createdAt", "DESC"]]
        })
        .then(res => resolve(JSON.stringify(res)))
        .catch(err => reject(err));
    });
  };

  measurements.forPlant = plantID => {
    return new Promise((resolve, reject) => {
      measurements
        .findAll({
          where: {
            plant_id: { [Op.eq]: Number(plantID) }
          },
          limit: 100
        })
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
