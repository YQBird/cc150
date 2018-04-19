const URLify = require('./index');

test('should return expected str', () => {
  expect(URLify("Mr John Smith   ", 13)).toEqual("Mr%20John%20Smith");
  expect(URLify("Please told me truth", 20)).toEqual("Please%20told%20me%20truth");
});

test('should return empty str', () => {
  expect(URLify("", 0)).toEqual("");
});

test('should handle edge case', () => {
  expect(URLify()).toEqual("");
  expect(URLify("", 8)).toEqual("");
});