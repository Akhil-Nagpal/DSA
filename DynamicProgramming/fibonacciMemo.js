// *-*-*-*-* FIND THE FIBONACCI USING DYNAMIC PROGRAMMING WITH MEMOIZATION APPROACH *-*-*-*-*

function fiboancciMemo(n, memo = {}) {
  // Base Case Check -> if the value is present in memo object then return that value from memo
  if (n in memo) {
    return memo[n];
  }

  // Base Cases
  // Case 1 -> if the n is equals to 0 then return 0
  if (n === 0) {
    return 0;
  }

  // Case 2 -> if the n is equals to 1 then return 1
  if (n === 1) {
    return 1;
  }

  // Now calcualte the fibonacci of n value which might present in memo
  memo[n] = fiboancciMemo(n - 1, memo) + fiboancciMemo(n - 2, memo);

  return memo[n];
}

console.log(fiboancciMemo(6));
