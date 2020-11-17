export const selectionSortMathMin = (items) => {
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

  return tab;
};

export const selectionSortStandard = (arr) => {
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
      // const temp = tableau[i];
      // tableau[i] = tableau[min];
      // tableau[min] = temp;
    }
  }
  return tableau;
};
