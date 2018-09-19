import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";

const router: express.Router = express.Router();

router.get("/:endDate", (req: Request, res: Response, next: NextFunction) => {
  db.waterings
    .range7Days(req.params.endDate)
    .then((waterings: any) => {
      res.json(waterings);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(404).json({ err: "could not return waterings" });
    });
});

export default router;
