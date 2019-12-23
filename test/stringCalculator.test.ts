import { add } from "../src/stringCalculator";

describe("String calculator", () => {
  it("should return 0 when execute add given an empty string", () => {
    const result = add("");

    expect(result).toEqual("0");
    expect(result).not.toEqual(0);
  });

  it("should return string 1 when execute add given an string 1", () => {
    const result = add("1");

    expect(result).toEqual("1");
  });

  it("should return string 3.3 when execute add given an string 1.1,2.2", () => {
    const result = add("1.1,2.2");

    expect(result).toEqual("3.3");
  });
});
