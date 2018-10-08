// Given a “2 x n” board and tiles of size “2 x 1”, count the number of ways to tile the given board using the 2 x 1 tiles. A tile can either be placed horizontally i.e., as a 1 x 2 tile or vertically i.e., as 2 x 1 tile.

// If size of board is 2 x 1 then there is 1 way
// If size of board is 2 x 2 then there are 2
// If size of board is 3 x 2 then there are 3

const numTiles = n => {
  // arr of i will count the number of ways at each
  // each tile can be placed either vertically or horizontally
  let memo = [];
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  console.log(memo);
  return memo[n];
}

console.log(numTiles(4))
// Should return 5
