"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint("waterings", ["plant_id"], {
        type: "foreign key",
        name: "fkey_waterings_plant_id",
        references: {
          table: "plants",
          field: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      }),
      queryInterface.addConstraint("measurements", ["plant_id"], {
        type: "foreign key",
        name: "fkey_measurements_plant_id",
        references: {
          table: "plants",
          field: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      }),
      queryInterface.addConstraint("measurements", ["sensor_id"], {
        type: "foreign key",
        name: "fkey_measurements_sensor_id",
        references: {
          table: "sensors",
          field: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint("waterings", "fkey_waterings_plant_id"),
      queryInterface.removeConstraint(
        "measurements",
        "fkey_measurements_plant_id"
      ),
      queryInterface.removeConstraint(
        "measurements",
        "fkey_measurements_sensor_id"
      )
    ]);
  }
};
