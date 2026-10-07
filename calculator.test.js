const { add, subtract } = require("./calculator");

test("add numbers correctly", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
});

test("subtract numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(-1, -1)).toBe(0);
});

test("add throws error for non-number arguments", () => {
  expect(() => add("hello", "2")).toThrow("Both arguments must be numbers");
  expect(() => add("yes", 2)).toThrow("Both arguments must be numbers");
});

test("subtract throws error for non-number arguments", () => {
  expect(() => subtract("of course", "2")).toThrow(
    "Both arguments must be numbers",
  );
  expect(() => subtract("agree", "nothing")).toThrow(
    "Both arguments must be numbers",
  );
});
