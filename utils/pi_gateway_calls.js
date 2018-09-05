const axios = require("axios");
const routes = require("../config/URLs");
let db = require("../models/");

const humidityMeasurement = (plantID, sensorID) => {
  return new Promise((resolve, reject) => {
    axios
      // .get(routes.gatewayBaseURL + routes.humidityMeansurePath)
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          routes.humidityMeansurePath
      )
      .then(sensorRes => {
        // console.log(sensorRes.data.toFixed(3));
        db.measurements
          .create({
            plant_id: plantID,
            sensor_id: sensorID,
            value: sensorRes.data.toFixed(3)
          })
          .then(measurement => {
            wateringJudge(measurement.value, plantID);
            console.log("forsätter...");
            resolve(JSON.stringify(measurement));
          })
          .catch(err => console.log("couldn't save measurement to db", err));
      })
      .catch(err => {
        console.log("Error with pi humidity request", err);
        reject("Error with pi humidity request");
      });
  });
};

const wateringJudge = (measurement, plantID) => {
  // console.log("measurement: ", measurement);
  let dryThreshold = 0.5;
  if (measurement < dryThreshold) applyWater(plantID);
  console.log("wateringJudge returning");
  return;
};

const applyWater = plantID => {
  axios
    .get(
      "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
        routes.humidityMeansurePath
    )
    .then(res => console.log("res from applyWater"))
    .catch(err => console.log("error from apply water", err));
};

module.exports = { humidityMeasurement: humidityMeasurement };
