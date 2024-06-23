// *-*-*-*-* POWER OF A GIVEN NUMBER *-*-*-*-*

// *-*-*-*-* Recursive Approach *-*-*-*-*
function power(base, exponent) {
  // Base Case -> if the exponent turns 0 then return 1
  if (exponent === 0) {
    return 1;
  }

  // Recursive Case
  return base * power(base, exponent - 1);
}

console.log(power(2, 5));
