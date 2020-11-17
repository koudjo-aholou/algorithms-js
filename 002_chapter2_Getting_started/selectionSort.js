/* eslint-disable no-console */
const A = [12, 5, 2, 78, 4];

// function selectionSort(arr) {
//   let tableau = [...arr];
//   for (let i = 0; i < tableau.length; i += 1) {
//     const getShortArr = tableau.slice(i, tableau.length);
//     const max = Math.max(...getShortArr);
//     const filterWithoutMax = tableau.filter((_, index) => index !== tableau.indexOf(max));
//     tableau = [max, ...filterWithoutMax];
//   }
//   return tableau;
// }

/**
 *
 * @param {Array.<number>} items
 * @returns {Array.<number> | Error}
 */
const selectionSortMathMin = (items) => {
  const tab = [...items];
  if (!tab.every((el) => typeof el === 'number')) throw Error('Wrong type');
  for (let i = 0; i < tab.length; i += 1) {
    const smallest = Math.min(...tab.slice(i));
    const smallestIdx = tab.indexOf(smallest);

    if (tab[i] > tab[smallestIdx]) {
      const temp = tab[i];
      [tab[i], tab[smallestIdx]] = [tab[smallestIdx], temp];
    }
  }

  return items;
};

/**
 *
 * @param {Array.<number>| Array.<string>} items
 * @returns {Array.<number> | Array.<string>}
 */
function selectionSortStandard(arr) {
  const tableau = [...arr];
  for (let i = 0; i < tableau.length; i += 1) {
    let min = i; //  storing the index of minimum element

    for (let j = i + 1; j < tableau.length; j += 1) {
      if (tableau[min] > tableau[j]) {
        min = j; // updating the index of minimum element
      }
    }

    if (i !== min) {
      [tableau[i], tableau[min]] = [tableau[min], tableau[i]];
    }
  }
  return tableau;
}

// console.log(selectionSort(A)); // - [2, 4, 5, 12, 78]

console.log(selectionSortStandard(A)); // - [2, 4, 5, 12, 78]
console.log(selectionSortMathMin(A)); // - [2, 4, 5, 12, 78]
