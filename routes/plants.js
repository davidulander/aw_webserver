const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/", (req, res, next) => {
  console.log(db.plants);
  db.plants
    .all()
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = router;
