// Given an array of n integers, and a positive integer m between 1 and 100, find the number of subsets in the array whose sums are divisible by m.

// If the subset is 3 long, 4 long is equal to the number of subsets 3 long
// We need to record the number of items with remainder of j per each array length. This way it is possible to figure out how many additional subsets have sums divisible by m each time.

//Input : arr = [1, 2, 3], div = 3;
//Output : 3

const divisibleSubsets = (arr, div) => {
  let memo = [];
  for (let i = 0; i <= arr.length; i++) { // i length of the arr
    memo[i] = [];
    for (let j = 0; j < div; j++) { //j # subsets with rem j
      if (i === 0) {
        memo[i][j] = 0;
      } else {
        memo[i][j] = memo[i-1][j] + memo[i-1][Math.abs(j - arr[i - 1]) % div] + +(j === arr[i - 1] % div);
      }
    }
  }
  console.log(memo);
  return memo[arr.length][0];
}

console.log(divisibleSubsets([1, 2, 3], 3))
//answer should be 3

console.log(divisibleSubsets([1, 2, 3, 4], 2))
// Expected output: 7
