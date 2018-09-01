"use strict";
let plants = require("./plants");
let sensors = require("./sensors");
module.exports = (sequelize, DataTypes) => {
  const measurements = sequelize.define(
    "measurements",
    {
      sensor_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER
    },
    {
      scope: {
        lastMeasurement: {
          order: ["created_at", "DESC"],
          limit: 1
        }
      }
    }
  );
  measurements.associate = models => {
    measurements.belongsTo(models.plants);
    measurements.belongsTo(models.sensors);
  };
  return measurements;
};
