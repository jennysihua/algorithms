/* Implement Mergesort */

const merge = (arr1, arr2) => {
  let merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }
  merged.push(...arr1, ...arr2);
  return merged;
}

const mergeSort = arr => {
  if (arr.length < 2) return arr;
  let midIdx = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, midIdx)), mergeSort(arr.slice(midIdx)));
}

module.exports = mergeSort;
