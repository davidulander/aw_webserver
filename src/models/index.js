"use strict";

import Sequelize from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
console.log("env: ", env);
export let db = {};

function getModels(config, force = false) {
  if (Object.keys(db).length && !force) {
    return db;
  }

  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  let modules = [
    require("./measurements.js"),
    require("./plants.js"),
    require("./sensors.js"),
    require("./waterings.js")
  ];

  // Initialize db
  modules.forEach(module => {
    const model = module(sequelize, Sequelize, config);
    db[model.name] = model;
  });

  // Apply associations
  Object.keys(db).forEach(key => {
    if ("associate" in db[key]) {
      db[key].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
}

getModels(config, false);
