"use strict";
module.exports = (sequelize, DataTypes) => {
  const plants = sequelize.define(
    "plants",
    {
      name: DataTypes.STRING
    },
    {}
  );
  plants.associate = function(models) {
    // associations can be defined here
  };
  return plants;
};
