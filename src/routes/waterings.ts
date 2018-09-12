import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
import { applyWater } from "../utils/pi_gateway_calls";
const router: express.Router = express.Router();

router.post("/:plant_id", (req: Request, res: Response, next: NextFunction) => {
  let plant_id = req.params.plant_id;
  db.plants
    .findOne({ where: { id: plant_id } })
    .then((plant: any) => {
      if (plant !== null) {
        applyWater(plant_id)
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
    .catch((err: any) => {
      console.log(err);
      res.status(405).json({ err: "could not find plant" });
    });
});

export default router;
