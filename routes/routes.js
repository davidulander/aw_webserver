const express = require("express");
const axios = require("axios");
const routes = require("../config/config");
const router = express.Router();

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
module.exports = router;
