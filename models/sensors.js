"use strict";
module.exports = (sequelize, DataTypes) => {
  const sensors = sequelize.define(
    "sensors",
    {
      name: DataTypes.STRING
    },
    {}
  );
  sensors.associate = function(models) {
    sensors.hasMany(models.measurements, { foreignKey: "sensor_id" });
  };
  return sensors;
};
