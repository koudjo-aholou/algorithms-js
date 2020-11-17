/* eslint-disable no-console */
const raw = [6, 3, 8, 2, 1];

/**
 *
 * @param {Array.<number>|Array.<string>} arr
 * @returns {Array.<number>|Array.<string>}
 */

function insertionSortWhile(arr) {
  const tableau = [...arr];
  tableau.forEach((item, index) => {
    const current = item;
    let prev = index - 1;
    while (index > 0 && tableau[prev] < current) {
      tableau[prev + 1] = tableau[prev];
      prev -= 1;
    }
    tableau[prev + 1] = current;
  });
  return tableau;
}

/**
 *
 * @param {Array.<number>|Array.<string>} arr
 * @returns {Array.<number>|Array.<string>}
 */

function insertionSortFor(arr) {
  const len = arr.length;
  const tableau = [...arr];
  for (let i = 0; i < len; i += 1) {
    const current = tableau[i];
    let j;

    for (j = i - 1; j >= 0 && tableau[j] < current; j -= 1) {
      tableau[j + 1] = tableau[j];
    }
    tableau[j + 1] = current;
  }
  return tableau;
}

console.log(insertionSortWhile(raw)); // [8, 6, 3, 2, 1]
console.log(insertionSortFor(raw)); // [8, 6, 3, 2, 1]

const insertionSortSplice = (array) => {
  // Loop through array, minus the base value*
  for (let i = 1; i < array.length; i += 1) {
    // Loop through entire array for comparison
    // console.log('outer', array[i]);
    for (let j = 0; j < i; j += 1) {
      // check if value is less than current index
      // console.log('inner', array[j]);
      if (array[i] < array[j]) {
        // if so, store in temp variable removing it from array
        // console.log('pre-sort', array);
        const temp = array.splice(i, 1);
        // console.log('temp', temp);
        // INSERT value into correct index
        array.splice(j, 0, temp[0]);
        // console.log('post-sort', array);
      }
    }
  }
  // return sorted array
  return array;
};

console.log(insertionSortSplice(raw));
