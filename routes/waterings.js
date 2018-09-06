const express = require("express");
const router = express.Router();
const db = require("../models/index");
const piGateway = require("../utils/pi_gateway_calls");

router.post("/:plant_id", (req, res, next) => {
  let plant_id = req.params.plant_id;
  db.plants
    .findOne({ where: { id: plant_id } })
    .then(plant => {
      if (plant !== null) {
        piGateway
          .applyWater(plant_id)
          .then(values => {
            res.json(values);
          })
          .catch(err => {
            res.status(500).json({ err: err });
          });
      } else {
        res.status(404).json({ err: "could not find plant" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(405).json({ err: "could not find plant" });
    });
});

module.exports = router;
