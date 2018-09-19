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

  waterings.range7Days = endDateStr => {
    let endDate = new Date(endDateStr);
    let startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);
    return new Promise((resolve, reject) => {
      waterings
        .findAll({
          where: {
            createdAt: {
              $lte: endDate,
              $gt: startDate
            }
          },
          order: [["plant_id", "ASC"], ["createdAt", "DESC"]]
        })
        .then(res => resolve(JSON.stringify(res)))
        .catch(err => reject(err));
    });
  };
  return waterings;
};
