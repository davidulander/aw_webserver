import { applyWater } from "../src/utils/pi_gateway_calls";
describe("pi_gateway_calls", () => {
  it("applyWater should contain correct key", () => {
    return applyWater(1).then(value => {
      return JSON.parse(value).should.property("plant_id");
    });
  });
});
