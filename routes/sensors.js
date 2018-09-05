const express = require("express");
const router = express.Router();
const { humidityMeasurement } = require("../utils/pi_gateway_calls");

router.get("/humidity", (req, res, next) => {
  console.log("request recieved humidity");
  let measuredValue = Math.random();
  console.log(measuredValue);
  let sensorID = 1;
  let plantID = 1;
  humidityMeasurement(plantID, sensorID)
    .then(measurement => res.json(measurement))
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

// router.get("/all")

router.get("/db", (req, res, next) => {
  Promise.all([
    db.plants.findOne({ where: { name: "Basil" } }),
    db.measurements.findAll({
      include: [{ model: db.plants, where: { name: "Maskros" } }]
    }),
    db.measurements.scope("lastMeasurement").findAll()
  ])
    .then(queryRes => {
      res.json({
        status: "success",
        plant: JSON.stringify(queryRes[0]),
        measurement: JSON.stringify(queryRes[1]),
        scope: JSON.stringify(queryRes[2])
      });
    })
    .catch(err => console.log(err));
});
module.exports = router;
