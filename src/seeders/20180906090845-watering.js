"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "waterings",
      [
        {
          id: 1,
          plant_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          plant_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          plant_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          plant_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          plant_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("waterings", null, {});
  }
};
