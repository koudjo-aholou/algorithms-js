// Perf with array of 10 000 :
// insertionSortWhile < selectionSortStandard < insertionSortFor < mergeSort
export function insertionSortWhile(arr) {
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

export function insertionSortFor(arr) {
  const tab = [...arr];
  for (let i = 0; i < tab.length; i += 1) {
    const curr = tab[i];
    let prev;
    for (prev = i - 1; prev >= 0 && tab[prev] < curr; prev -= 1) {
      tab[prev + 1] = tab[prev];
    }
    tab[prev + 1] = curr;
  }
  return tab;
}

export const insertionSortSplice = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] < array[j]) {
        const temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }
  return array;
};
