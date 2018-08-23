let express = require("express");
const routes = require("./routes/routes");

let server = express();

server.use("/sensors", routes);

server.use("/", (req, res) => {
  console.log("Hello from test");
  res.json({ status: "success" });
});
server.listen(8000, () => {
  console.log("server running on port 8000");
});
