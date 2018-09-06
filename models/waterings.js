"use strict";
module.exports = (sequelize, DataTypes) => {
  const waterings = sequelize.define(
    "waterings",
    {
      plant_id: DataTypes.INTEGER
    },
    {}
  );
  waterings.associate = function(models) {
    waterings.belongsTo(models.plants, { foreignKey: "plant_id" });
  };

  return waterings;
};
