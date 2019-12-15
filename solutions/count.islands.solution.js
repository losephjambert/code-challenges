function countIslands(map) {
  if (!map || !map.length) return 0;

  // we want to use a graph algorthim here to count islands recursively
  // we'll take a depth first approach because it's more amenable to recursion
  // a couple things to note:
  //  1. we have to look at every element on the map O(n)
  //    1a. for each land element we find, we need to call a traversing function to see how much land there is
  //  2. we'll need some sort of island counting function

  // start off with 0 islands because that's how many islands we've seen so far
  let numIslands = 0;

  // we need to be able to examine each element on our map
  // nest for loops will help us there
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      // in here is where we examine each element on the map
      // we only really care if we encounter land
      const land = map[row][col] === 1;
      if (land) {
        // traverse the map in all four directions-- N, S, E, W -- from our current location
        numIslands += traverse(map, row, col); // => 0 or 1 depending on whether it's contiguous
      }
    }
  }

  return numIslands;
}

function traverse(map, row, col) {
  if (row < 0 || row >= map.length || col < 0 || col >= map[row].length || map[row][col] === 0) {
    return 0;
  }

  map[row][col] = 0;
  traverse(map, row + 1, col);
  traverse(map, row - 1, col);
  traverse(map, row, col + 1);
  traverse(map, row, col - 1);

  return 1;
}

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
