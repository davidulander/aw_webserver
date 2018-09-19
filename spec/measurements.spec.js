import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { db } from "../src/models/index";
import axios from "axios";
import jwt from "jwt-simple";
import { jwtSecret } from "../src/config/jwt";
// import fixtures from "sequelize-fixtures";
// import measurementsData from "./fixtures/measurements";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
chai.should();
chai.use(chaiAsPromised);

describe("measurements controller", function() {
  it("should find measurements", () => {
    return db.measurements.findAll().should.be.fulfilled;
  });
  it("Http get /measurements/:enddate all measurements within 7 days range", () => {
    // fixtures.loadFixtures(measurementsData, db).then(function() {
    const token = jwt.encode({}, jwtSecret);
    return axios
      .get(`https://localhost:8080/measurements/${new Date()}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        JSON.parse(res.data.measurements).length.should.be.above(4);
        JSON.parse(res.data.plants).length.should.equal(3);
        return res.status.should.equal(200);
      });
    // });
  });
  it("Http get /measurements/:plantID should return measurements", () => {
    const token = jwt.encode({}, jwtSecret);
    return axios
      .get("https://localhost:8080/measurements/one/1", {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        JSON.parse(res.data.measurements).length.should.be.above(2);
        return res.status.should.be.equal(200);
      });
  });
});
