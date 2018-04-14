const isUnique = require("./index");

test("should return true", () => {
  expect(isUnique("abcdefg")).toEqual(true);
});

test("should return false", () => {
  expect(isUnique("ababccdds")).toEqual(false);
});

test("should return true for empty string", () => {
  expect(isUnique("")).toEqual(true);
});

test("one char string should return true", () => {
  expect(isUnique("a")).toEqual(true);
});
