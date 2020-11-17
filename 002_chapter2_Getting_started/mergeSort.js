/* eslint-disable no-console */

/**
 *
 * @param {Array.<number>} left
 * @param {Array.<number>} right
 * @return {Array.<number>}
 */
function merger(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  const result = [...arr, ...left, ...right];
  console.log(result);
  return result;
}

/**
 *
 * @param {Array.<number>} array
 * @returns {Array.<number>}
 */
function mergeSort(array) {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half); // left part of array

  return merger(mergeSort(left), mergeSort(array));
}

console.log(mergeSort([3, 41, 52, 26, 38, 57, 9, 49]));

// // Output ->[3, 9, 26, 38, 41, 49, 52, 57
