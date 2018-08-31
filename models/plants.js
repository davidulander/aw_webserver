"use strict";
module.exports = (sequelize, DataTypes) => {
  const Plants = sequelize.define(
    "plants",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Plants.associate = function(models) {
    // associations can be defined here
  };
  return Plants;
};
