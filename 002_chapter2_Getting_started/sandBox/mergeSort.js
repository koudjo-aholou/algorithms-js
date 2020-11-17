function merger(left, right) {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  // merge left && right
  return [...arr, ...left, ...right];
}

export default function mergeSort(unsortedArray) {
  const half = Math.floor(unsortedArray.length / 2);
  if (unsortedArray.length < 2) return unsortedArray;
  const [left, right] = [unsortedArray.splice(0, half), unsortedArray];

  // Continue to splitting by using recursion
  return merger(mergeSort(left), mergeSort(right));
}
