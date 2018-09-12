import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
const router: express.Router = express.Router();

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
