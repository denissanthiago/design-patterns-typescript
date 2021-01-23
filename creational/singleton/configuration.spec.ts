import MyConfiguration from "./configuration";

import { expect } from "chai";
import "mocha";

let config = MyConfiguration.getInstance();

describe("My configuration class", () => {
  it("si mi configuracion no es nula", () => {
    expect(config !== null).to.equal(true);
  });

  it("Si mis objetos creados son iguales", () => {
    let config2 = MyConfiguration.getInstance();
    expect(config === config2).to.equal(true);
  });

  it("ver si estoy en modo desarrollo", () => {
    expect(config.environment === "development").to.equal(true);
  });
});
