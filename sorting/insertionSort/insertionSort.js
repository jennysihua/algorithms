const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = i;
    while (arr[curr] < arr[curr - 1]) {
      let temp = arr[curr - 1];
      arr[curr - 1] = arr[curr];
      arr[curr] = temp;
      curr--;
    }
  }
  return arr;
}

module.exports = insertionSort
