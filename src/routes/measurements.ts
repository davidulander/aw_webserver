import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
const router: express.Router = express.Router();

router.get("/:date", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params.date);
  db.measurements
    .range7Days(req.params.date, db.plants)
    .then((values: any) => {
      console.log(values);
      res.json(values);
    })
    .catch((err: any) => {
      console.log(err);
      res.json({ err });
    });
});

router.get("/:plantID", (req: Request, res: Response, next: NextFunction) => {
  db.measurements
    .measurements(req.params.plantID)
    .then((values: any) => {
      res.json(values);
    })
    .catch((err: any) => {
      console.log(err);
      res.json({ err });
    });
});

router.get("/last/:plantID", (req, res, next) => {
  db.measurements
    .measurements(req.params.plantID, true)
    .then((values: any) => {
      res.json(values);
    })
    .catch((err: any) => {
      console.log(err);
      res.json({ err });
    });
});

export default router;
