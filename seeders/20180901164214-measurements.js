"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // let basilID =
    return queryInterface.bulkInsert(
      "measurements",
      [
        {
          id: 1,
          sensor_id: 1,
          plant_id: 1,
          value: 0.7
        },
        {
          id: 2,
          sensor_id: 1,
          plant_id: 1,
          value: 0.7
        },
        {
          id: 3,
          sensor_id: 1,
          plant_id: 1,
          value: 0.7
        },
        {
          id: 4,
          sensor_id: 2,
          plant_id: 2,
          value: 0.7
        },
        {
          id: 5,
          sensor_id: 1,
          plant_id: 3,
          value: 0.7
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("measurements", null, {});
  }
};
