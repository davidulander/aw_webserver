import * as express from "express";
import { Request, Response } from "express";
import sensors from "./routes/sensors";
import measurements from "./routes/measurements";
import plants from "./routes/plants";
import waterings from "./routes/waterings";

let server: express.Application = express();

server.use("/sensors", sensors);
server.use("/measurements", measurements);
server.use("/plants", plants);
server.use("/waterings", waterings);

server.use("/", (req: Request, res: Response) => {
  console.log("Hello from baseURL");
  res.json({ status: "Hello from baseURL" });
});
server.listen(8000, () => {
  console.log("server running on port 8000");
});
