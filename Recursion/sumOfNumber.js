// *-*-*-*-* SUM OF N NUMBERS *-*-*-*-*

// *-*-*-*-* Recursive Approach *-*-*-*-*

function sum(value) {
  // Base Case
  if (value === 1) {
    return value;
  }

  // Recursive Case
  return value + sum(value - 1);
}

console.log(sum(10));
