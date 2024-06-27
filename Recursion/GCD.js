// *-*-*-*-* FIND GREATEST COMMON DIVISOR *-*-*-*-*

// *-*-*-*-* Recursive Approach *-*-*-*-*
function gcd(num1, num2) {
  // Base Case ->
  if (num1 === num2) {
    return num2;
  }

  // Recursive Case
  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  }

  if (num1 < num2) {
    return gcd(num1, num2 - num1);
  }
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(gcd(96, 108));

// *-*-*-*-* For Simplicity *-*-*-*-*
// gcd(96, 108 - 96) -> gcd(96, 12) -> gcd(96 - 12, 12) -> gcd(84, 12) -> gcd(84 - 12, 12) -> gcd(72, 12)
// gcd(72 - 12, 12) -> gcd(60, 12) -> gcd(60 - 12, 12) -> gcd(48, 12) -> gcd(48 - 12, 12) -> gcd(36, 12)
// gcd(36 - 12, 12) -> gcd(24, 12) -> gcd(24 - 12, 12) -> gcd(12, 12) -> 12

// let num1 = 96;
// let num2 = 108;

// minNum = Math.min(num1, num2);
// // console.log(minNum);
// let gcd = 1;
// for (i = 0; i <= minNum; i++) {
//   if (num1 % i == 0 && num2 % i == 0) {
//     gcd = i;
//   }
// }
// console.log(gcd);

// *-*-*-*-* Iterative Approach *-*-*-*-*
function gcd(num1, num2) {
  let minNum = Math.min(num1, num2);

  let gcd = 0;
  for (i = 0; i <= minNum; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
      // console.log(gcd);
      console.log(i);
    }
  }
  return gcd;
}

console.log(gcd(96, 108));
