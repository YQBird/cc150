const isPermutation = require("./index");

test("should return true", () => {
  expect(isPermutation("ababcdde", "dedcaabb")).toEqual(true);
});

test("should return false", () => {
  expect(isPermutation("ababcdde", "dedcbb")).toEqual(false);
});

test("should return false for same length", () => {
  expect(isPermutation("ababcdde", "dedczzbb")).toEqual(false);
});

test("edge case", () => {
  expect(isPermutation("", "")).toEqual(true);
  expect(isPermutation("")).toEqual(false);
  expect(isPermutation(null, "")).toEqual(false);
});
