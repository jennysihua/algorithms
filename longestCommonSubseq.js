const LCS = (s1, s2) => {
  if (!s1.length || !s2.length) {
    return '';
  }
  if (s1[s1.length - 1] === s2[s2.length - 1]) {
    return LCS(s1.slice(0, s1.length - 1), s2.slice(0, s2.length - 1)) + s1[s1.length - 1];
  } else {
    let LCS1 = LCS(s1.slice(0, s1.length - 1), s2);
    let LCS2 = LCS(s1, s2.slice(0, s2.length - 1));
    if (LCS1.length > LCS2.length) {
      return LCS1;
    } else {
      return LCS2;
    }
  }
}

const LCSDP = (s1, s2) => {
  let result = '';
  let memo = [];
  for (let i = 0; i <= s1.length; i++) {
    memo[i] = [];
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0) {
        memo[i][j] = 0;
        continue;
      }
      if (s1[i] === s2[j]) {
        memo[i][j] = memo[i - 1][j - 1] + 1;
        result = result + s1[i - 1];
      } else {
        memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }
  return {
    result,
    memo,
  }
}

console.log(LCS('AGGTAB', 'GXTXAYB'))
console.log(LCSDP('AGGTAB', 'GXTXAYB'))
