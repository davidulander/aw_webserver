import chai from "chai";
import app from "../src/index";
import chaiAsPromised from "chai-as-promised";
import axios from "axios";
import * as jwt from "jwt-simple";
import { jwtSecret } from "../src/config/jwt";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
chai.should();
chai.use(chaiAsPromised);

describe("login controller: ", function() {
  it("Https get /login/ to be successful", () => {
    return axios
      .post("https://localhost:8080/login", {
        username: "Daul",
        password: "david"
      })
      .then(res => {
        var decoded = jwt.decode(res.data.token, jwtSecret);
        decoded.should.deep.equal({ username: "Daul" });
        return res.status.should.equal(200);
      });
  });
  it("Https get /login/ to be wrong password", () => {
    return axios
      .post("https://localhost:8080/login", {
        username: "Daul",
        password: "wrongPass"
      })
      .catch(err => {
        return err.response.status.should.equal(404);
      });
  });
  it("Https get /login/ to be user connot be found", () => {
    return axios
      .post("https://localhost:8080/login", {
        username: "wrong user",
        password: "david"
      })
      .catch(err => {
        return err.response.status.should.equal(401);
      });
  });
  it("Auth test, incorrect token", () => {
    const token = jwt.encode({}, "wrong secret");
    return axios
      .get("https://localhost:8080/plants", {
        headers: { Authorization: "Bearer " + token }
      })
      .catch(err => {
        return err.response.status.should.equal(401);
      });
  });
});
