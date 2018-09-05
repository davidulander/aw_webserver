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

  plants.all = () => {
    return new Promise((resolve, reject) => {
      plants
        .findAll({ attributes: ["id", "name"] })
        .then(res => resolve(JSON.stringify(res)))
        .catch(err => reject("error with findAll plants ", err));
    });
  };

  return plants;
};
