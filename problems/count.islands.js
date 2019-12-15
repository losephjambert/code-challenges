/**
 * Count the Islands on a given map
 * I have a map that is made up of 1s and 0s.
 * The 1s are land and the 0s are water
 * I'm trying to write a function that counts
 * the number of islands on my map, but I'm having
 * trouble. Will you help me count the islands?
 *
 * See test cases below to understand the product requirements.
 *
 * Good luck, and may the force be with you :)
 */

function countIslands(map) {}

// Tests
let desc = '1 island';
let actual = countIslands([
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0],
]);
let expected = 1;
assertEquals(actual, expected, desc);

desc = '2 islands';
actual = countIslands([
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
]);
expected = 2;
assertEquals(actual, expected, desc);

desc = 'empty map';
actual = countIslands([]);
expected = 0;
assertEquals(actual, expected, desc);

desc = 'null map';
actual = countIslands(null);
expected = 0;
assertEquals(actual, expected, desc);

desc = '4 islands';
actual = countIslands([
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
]);
expected = 4;
assertEquals(actual, expected, desc);

function assertEquals(actual, expected, desc) {
  if (actual !== expected) {
    console.log(`${desc} ... FAIL: ${actual} != ${expected}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
