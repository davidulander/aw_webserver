"use strict";

import Sequelize from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let models = {};

function getModels(config, force = false) {
  if (Object.keys(models).length && !force) {
    return models;
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

  // Initialize models
  modules.forEach(module => {
    const model = module(sequelize, Sequelize, config);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach(key => {
    if ("associate" in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
}

getModels(config, false);
export default models;
