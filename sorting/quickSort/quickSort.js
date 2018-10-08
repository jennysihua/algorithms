/* Implement Quicksort */

//To-do: Refactor

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}


const quickSort = arr => {
  if (arr.length < 2) return arr;
  let part = 0;
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    while (arr[part] >= arr[left] && right > left) {
      left++;
    }
    while (arr[right] > arr[part] && right > left) {
      right--;
    }
    swap(arr, left, right)
  }
  if (right < arr.length - 1 || arr[right] > arr[part]) {
    right--;
  }
  swap(arr, part, right)
  part = right;
  arr = [...quickSort(arr.slice(0, part)), arr[part], ...quickSort(arr.slice(part + 1))]
  return arr;
}
console.log(quickSort([5, 4, 3, 2, 1]));

module.exports = quickSort;
