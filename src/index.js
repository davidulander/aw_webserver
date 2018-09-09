let express = require("express");
import sensors from "./routes/sensors";
import measurements from "./routes/measurements";
import plants from "./routes/plants";
import waterings from "./routes/waterings";

let server = express();

server.use("/sensors", sensors);
server.use("/measurements", measurements);
server.use("/plants", plants);
server.use("/waterings", waterings);

server.use("/", (req, res) => {
  console.log("Hello from test");
  res.json({ status: "success" });
});
server.listen(8000, () => {
  console.log("server running on port 8000");
});
