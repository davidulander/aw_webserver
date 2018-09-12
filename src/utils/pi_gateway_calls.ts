import { db } from "../models/index";
import "es6-promise";
const axios = require("axios");
import { gatewayBaseURL, humidityMeansurePath } from "../config/URLs";

export const humidityMeasurement = (
  plantID: number,
  sensorID: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      // .get(routes.gatewayBaseURL + routes.humidityMeansurePath)
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          humidityMeansurePath
      )
      .then((sensorRes: any) => {
        db.measurements
          .create({
            plant_id: plantID,
            sensor_id: sensorID,
            value: sensorRes.data.toFixed(3)
          })
          .then((measurement: any) => {
            wateringJudge(measurement.value, plantID);
            console.log("forsätter...");
            resolve(JSON.stringify(measurement));
          })
          .catch((err: any) => {
            console.log("couldn't save measurement to db", err);
            reject("couldn't save measurement to db");
          });
      })
      .catch((err: any) => {
        console.log("Error with pi humidity request", err);
        reject("Error with pi humidity request");
      });
  });
};

const wateringJudge = (measurement: number, plantID: number): void => {
  let dryThreshold = 0.5;
  if (measurement < dryThreshold)
    applyWater(plantID)
      .then(() => console.log("watering created"))
      .catch(err => console.log("error when creating waterings"));
  console.log("wateringJudge returning");
  return;
};

export const applyWater = (plantID: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://1b6a59c8-b449-4360-a30c-d0d6220dfb77.mock.pstmn.io" +
          humidityMeansurePath
      )
      .then((res: any) => {
        console.log("water was applied");
        db.waterings
          .create({ plant_id: plantID })
          .then((values: any) => {
            resolve(JSON.stringify(values));
          })
          .catch((err: any) => {
            console.log("error when creating waterings");
            console.log(err);
            reject(err);
          });
      })
      .catch((err: any) => {
        console.log("error from apply water");
        reject("error from apply water");
      });
  });
};
