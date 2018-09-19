import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { db } from "../src/models/index";
import axios from "axios";
import jwt from "jwt-simple";
import { jwtSecret } from "../src/config/jwt";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
chai.should();
chai.use(chaiAsPromised);

describe("waterings controller", function() {
  it("should find waterings", () => {
    return db.waterings.findAll().should.be.fulfilled;
  });
  it("Http get /waterings/:date all waterings within 7 days range", () => {
    const token = jwt.encode({}, jwtSecret);
    return axios
      .get(`https://localhost:8080/waterings/${new Date()}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        JSON.parse(res.data).length.should.be.above(2);
        return res.status.should.equal(200);
      });
  });
});
