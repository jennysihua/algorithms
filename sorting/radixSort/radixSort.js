const countingSort = (arr, place) => {
  let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    let currPlace = Math.floor(arr[i] / place) % 10;
    counts[currPlace] = counts[currPlace] ? counts[currPlace] + 1 : 1;
  }
  for (let i = 1; i < counts.length; i++) {
    counts[i] = counts[i - 1] + counts[i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    let currPlace = Math.floor(arr[i] / place) % 10;
    sorted[counts[currPlace] - 1] = arr[i];
    counts[currPlace]--;
  }
  return sorted;
}

const radixSort = arr => {
  let place = 1;
  let max = arr.reduce((maximum, item) => Math.max(item, maximum), 0);
  while (Math.floor(max / place) > 0) {
    arr = countingSort(arr, place);
    place *= 10;
  }
  return arr;
}

module.exports = radixSort;
