import * as express from "express";
import * as db from "../models/index";
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(db.plants);
  db.plants
    .all()
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

export default router;
