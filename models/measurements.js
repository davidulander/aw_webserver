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
