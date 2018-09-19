import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { db } from "../src/models/index";
import axios from "axios";
import jwt from "jwt-simple";
import { jwtSecret } from "../src/config/jwt";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
chai.should();
chai.use(chaiAsPromised);

describe("sensors controller", function() {
  it("Http get /sensors/applyWater should return success", () => {
    const token = jwt.encode({}, jwtSecret);
    return axios
      .post(
        "https://localhost:8080/sensors/applyWater",
        { plant_id: 1 },
        {
          headers: { Authorization: "Bearer " + token }
        }
      )
      .then(res => {
        (typeof JSON.parse(res.data)).should.be.equal("object");
        return res.status.should.equal(200);
      });
  });
});
