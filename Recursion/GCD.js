// *-*-*-*-* FIND GREATEST COMMON DIVISOR *-*-*-*-*

// ------ Recursive Approach ------
function gcd(num1, num2) {
  // Base Case ->
  if (num1 === num2) {
    return num1;
  }

  // Recursive Case
  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  }

  if (num1 < num2) {
    return gcd(num1, num2 - num1);
  }
}

console.log(gcd(96, 108));
