"use strict";
module.exports = (sequelize, DataTypes) => {
  const measurements = sequelize.define(
    "measurements",
    {
      sensor_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER
    },
    {
      // scope: {
      //   lastMeasurement: {
      //     order: ["createdAt", "DESC"],
      //     limit: 1
      //   }
      // }
    }
  );
  measurements.associate = models => {
    measurements.belongsTo(models.plants, { foreignKey: "plant_id" });
    measurements.belongsTo(models.sensors, { foreignKey: "sensor_id" });
  };
  return measurements;
};
