import chai from "chai";
import app from "../src/index";
import chaiAsPromised from "chai-as-promised";
import { db } from "../src/models/index";
import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
chai.should();
chai.use(chaiAsPromised);
var server;

describe("plants", function() {
  it("should find 3 plants", () => {
    return db.plants.findAll().should.eventually.have.length(3);
  });
  it("Http get /plants/ should return 3 plants", () => {
    return axios.get("https://localhost:8080/plants").then(res => {
      let array = JSON.parse(res.data);
      array[2].should.have.property("name");
      return array.should.have.length(3);
    });
  });
});
