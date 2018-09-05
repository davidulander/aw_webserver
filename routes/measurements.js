const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/:plantID", (req, res, next) => {
  db.measurements
    .measurements(req.params.plantID)
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

router.get("/last/:plantID", (req, res, next) => {
  db.measurements
    .measurements(req.params.plantID, true)
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = router;