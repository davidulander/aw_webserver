const express = require("express");
const axios = require("axios");
const routes = require("../config/config");
const request = require("request");
const router = express.Router();

// router.get("/humidity", (req, res, next) => {
//   console.log("request recieved");
//   axios
//     // .get(routes.humidityMeansurePath)
//     .get("192.168.0.60:8000/sensors/humidity")
//     .then(res => console.log(res))
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });
// module.exports = router;

console.log("doing request");
axios
  // .get("http://www.google.com")
  .get("http://192.168.0.60:8000/sensors/humidity")
  .then(() => console.log("success"))
  .catch(err => {
    console.log(err);
    // res.sendStatus(500);
  });
