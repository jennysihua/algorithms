/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // if (s.length === 0) return 0;
  // let memo = [1];
  // for (let i = 1; i < s.length; i++) {
  //     memo[i] = memo[i - 1] + 1;
  //     for (let j = 1; j < memo[i]; j++) {
  //         if (s[i] === s[i - j]) {
  //             memo[i] = j;
  //             continue;
  //         }
  //     }
  // }
  // return memo.reduce((max, el) => Math.max(max, el), 0);
  if (s.length === 0) return 0;
  let max = 1;
  let left = 0;
  let right = 1;
  let memo = new Set([s[left]]);
  while (right < s.length) {
      if (memo.has(s[right])) {
          memo.delete(s[left]);
          left++;
      } else {
          memo.add(s[right]);
          right++;
          max = Math.max(max, right - left);
      }
  }
  return max

};
