import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
const router: express.Router = express.Router();

router.get("/:endDate", (req: Request, res: Response, next: NextFunction) => {
  Promise.all([db.measurements.range7Days(req.params.endDate), db.plants.all()])
    .then((values: any) => {
      res.json({ measurements: values[0], plants: values[1] });
    })
    .catch((err: any) => {
      console.log(err);
      res.status(404).send({ error: err });
    });
});

router.get(
  "/one/:plantID",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("routes");
    console.log(req.params.plantID);
    db.measurements
      .forPlant(req.params.plantID)
      .then((values: any) => {
        console.log("then");
        console.log(values);
        res.json({ measurements: values });
      })
      .catch((err: any) => {
        console.log("err");
        console.log(err);
        res.status(404).send({ error: err });
      });
  }
);

export default router;
