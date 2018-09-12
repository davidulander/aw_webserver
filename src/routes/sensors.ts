import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
import { humidityMeasurement } from "../utils/pi_gateway_calls";

const router: express.Router = express.Router();

router.get("/humidity", (req: Request, res: Response, next: NextFunction) => {
  console.log("request recieved humidity");
  let sensorID = 1;
  let plantID = 1;
  humidityMeasurement(plantID, sensorID)
    .then(measurement => res.json(measurement))
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

router.get("/db", (req: Request, res: Response, next: NextFunction) => {
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

export default router;
