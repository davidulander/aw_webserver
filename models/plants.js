"use strict";
module.exports = (sequelize, DataTypes) => {
  const plants = sequelize.define(
    "plants",
    {
      name: DataTypes.STRING
    },
    { timestamps: true }
  );
  plants.associate = function(models) {
    // associations can be defined here
  };
  return Plants;
};
