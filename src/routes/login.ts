import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { db } from "../models/index";
import * as Sequelize from "sequelize";
const Op = Sequelize.Op;

const router: express.Router = express.Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("request recieved login");
  db.users
    .findOne({ where: { username: { [Op.eq]: req.body.username } } })
    .then((user: any) => {
      user
        .validatePass(req.body.password, user.password)
        .then((success: boolean) => {
          if (success) {
            res.json({ msg: `user ${user.username} logged in` });
          } else {
            res.status(404).send({ error: "wrong password" });
          }
        });
    })
    .catch((err: any) => {
      console.log(err);
      res.status(401).send({ error: "cannot find user" });
    });
});

router.post("/create", (req: Request, res: Response, next: NextFunction) => {
  console.log("request recieved create");
  db.users
    .create({ username: "Daul", password: "david" })
    .then((user: any) => res.json({ msg: `user ${user.username} created` }))
    .catch((err: any) => {
      res.status(500).send({ error: err });
    });
});

export default router;
