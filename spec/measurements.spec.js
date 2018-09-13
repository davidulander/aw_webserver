import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { db } from "../src/models/index";
import axios from "axios";

chai.should();
chai.use(chaiAsPromised);

describe("measurements", function() {
  it("should find measurements", () => {
    return db.measurements.findAll().should.be.fulfilled;
  });
  it("Http get /measurements/:plantID should return measurements", () => {
    return axios.get("http://localhost:8000/measurements/1").then(res => {
      JSON.parse(res.data).length.should.be.above(2);
      return JSON.parse(res.data)[0].should.property("id");
    });
  });
});
