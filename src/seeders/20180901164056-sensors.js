"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "sensors",
      [
        {
          id: 1,
          name: "Resistance Sensor 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Resistance Sensor 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Capacitive Sensor",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sensors", null, {});
  }
};
