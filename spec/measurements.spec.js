import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { db } from "../src/models/index";
import axios from "axios";
import jwt from "jwt-simple";
import { jwtSecret } from "../src/config/jwt";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
chai.should();
chai.use(chaiAsPromised);

describe("measurements", function() {
  it("should find measurements", () => {
    return db.measurements.findAll().should.be.fulfilled;
  });
  it("Http get /measurements/:plantID should return measurements", () => {
    const token = jwt.encode({}, jwtSecret);
    return axios
      .get("https://localhost:8080/measurements/1", {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        JSON.parse(res.data).length.should.be.above(2);
        return JSON.parse(res.data)[0].should.property("id");
      });
  });
});
