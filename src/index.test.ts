import test from "node:test";
import { checkNumber } from ".";
import { deepEqual } from "node:assert";

test("Test if input is a string", () => {
  const result = checkNumber("banan");
  deepEqual(result.message, "Please enter a valid number. Try again");
});

test("Test if input below 0", () => {
  const result = checkNumber(-2);
  deepEqual(result.message, "Please enter a valid number. Try again");
});

test("Message for successful result", () => {
  const result = checkNumber(68);
  const resultArray = result["result"];

  deepEqual(resultArray, [2, 2, 17]);
  deepEqual(result.message, "Your result was successful");
});

test("Is 7 a prime number", () => {
  const result = checkNumber(7);
  deepEqual(result.result, [7]);
});
