"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "plants",
      [
        { id: 1, name: "Basil", createdAt: new Date(), updatedAt: new Date() },
        {
          id: 2,
          name: "Maskros",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { id: 3, name: "Tulpan", createdAt: new Date(), updatedAt: new Date() }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("plants", null, {});
  }
};
