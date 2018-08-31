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
    // associations can be defined here
  };
  return sensors;
};
