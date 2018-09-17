import * as express from "express";
import { Request, Response } from "express";
import * as path from "path";
import sensors from "./routes/sensors";
import measurements from "./routes/measurements";
import plants from "./routes/plants";
import waterings from "./routes/waterings";
import login from "./routes/login";
import * as https from "https";
import * as fs from "fs";
import * as helmet from "helmet";
import * as jwtMiddleware from "express-jwt";
import { jwtSecret } from "./config/jwt";

const options = {
  key: fs.readFileSync(path.join(path.resolve(), "..", "cert", "cert.key")),
  cert: fs.readFileSync(path.join(path.resolve(), "..", "cert", "cert.pem"))
};

let server: express.Application = express();

server.use(helmet());
server.use(express.json());

server.use(
  "/",
  jwtMiddleware({
    secret: jwtSecret,
    getToken: (req: any): any => {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      }
      // No token the JWT middleware will return a 401 (unauthorized) to the client for this request
      return null;
    }
  }).unless({ path: ["/login"] })
);

server.use("/sensors", sensors);
server.use("/measurements", measurements);
server.use("/plants", plants);
server.use("/waterings", waterings);
server.use("/login", login);

server.use("/", (req: Request, res: Response) => {
  console.log("Hello from baseURL");
  res.json({ status: "Hello from baseURL" });
});

https.createServer(options, server).listen(8080, () => {
  console.log("server running on port 8080");
});

export default server;
