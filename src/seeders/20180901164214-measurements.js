"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "measurements",
      [
        {
          id: 1,
          sensor_id: 1,
          plant_id: 1,
          value: 0.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          sensor_id: 1,
          plant_id: 1,
          value: 0.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          sensor_id: 1,
          plant_id: 1,
          value: 0.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          sensor_id: 2,
          plant_id: 2,
          value: 0.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          sensor_id: 1,
          plant_id: 3,
          value: 0.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          sensor_id: 1,
          plant_id: 3,
          value: 0.7,
          createdAt: new Date("2016-01-01"),
          updatedAt: new Date("2016-01-01")
        },
        {
          id: 7,
          sensor_id: 1,
          plant_id: 3,
          value: 0.7,
          createdAt: new Date("2025-01-01"),
          updatedAt: new Date("2025-01-01")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("measurements", null, {});
  }
};
