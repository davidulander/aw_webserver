import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(db.plants);
  db.plants
    .all()
    .then((values: any) => {
      res.json(values);
    })
    .catch((err: any) => {
      console.log(err);
      res.json({ err });
    });
});

export default router;
