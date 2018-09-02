const express = require("express");
const axios = require("axios");
const routes = require("../config/URLs");
const router = express.Router();
let db = require("../models/index.js");

router.get("/humidity", (req, res, next) => {
  console.log("request recieved humidity");
  axios
    .get(routes.gatewayBaseURL + routes.humidityMeansurePath)
    .then(resPi => {
      res.json(resPi.data);
    })
    .catch(err => {
      console.log("Error with pi humidity request");
      console.log(err);
      res.sendStatus(500);
    });
});

router.get("/db", (req, res, next) => {
  Promise.all([
    db.plants.findOne({ where: { name: "Basil" } }),
    db.measurements.findAll({
      include: [{ model: db.plants, where: { name: "Maskros" } }]
    })
  ])
    .then(queryRes => {
      res.json({
        status: "success",
        plant: JSON.stringify(queryRes[0]),
        measurement: JSON.stringify(queryRes[1])
      });
    })
    .catch(err => console.log(err));
});
module.exports = router;
