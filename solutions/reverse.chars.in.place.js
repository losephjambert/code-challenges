function reverse(arrayOfChars) {
  // Reverse the input array of characters in place

  /**
   * If we only had two characters, how would we swap them?
   * temp = arr[0]
   * arr[0] = arr[1]
   * arr[1] = temp
   *
   * So if we have more than two characters, how can we use
   * the simplified two character swap to swap all the chars?
   *
   * We'll need to keep track of, and update, two pointers that we'll
   * use as indeces to swap the chars
   */

  // declare a start and end pointer, each at opposite ends of the array
  let start = 0;
  let end = arrayOfChars.length - 1;

  // while the two pointers aren't overlapping,
  // use the pointers to swap characters at the
  // index of each pointer
  while (start < end) {
    let temp = arrayOfChars[start];
    arrayOfChars[start] = arrayOfChars[end];
    arrayOfChars[end] = temp;

    start++;
    end--;
  }

  return arrayOfChars;
}

// Tracing
/**
 * input: ['h', 'e', 'l', 'l', 'o']
 * start: 0 end: 4
 * swap input[0] and input[4]  h <--> o
 *
 * input: ['o', 'e', 'l', 'l', 'h']
 * start: 1 end: 3
 * swap input[1] and input[3]  e <--> l
 *
 * input: ['o', 'l', 'l', 'e', 'h']
 * start: 2 end: 2
 * break out of while loop
 *
 * return input // ['o', 'l', 'l', 'e', 'h']
 */

// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
