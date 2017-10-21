import { expect } from "chai";

import { format } from "../src";

describe("Some silly library", () => {
  it("should format a number", () => {
    expect(format(42)).to.be.a("string");
  });

  it("should format a string", () => {
    expect(format("uh oh")).to.be.a("string");
  });
});
