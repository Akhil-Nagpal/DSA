// *-*-*-*-*-* FIBONACCI SEQUENCE *-*-*-*-*-*

// *-*-*-*-* Iterative Approach *-*-*-*-*
function fibonacci(value) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < value; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}
console.log(fibonacci(15));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursiveFibonacci(value) {
  // Base Case -> if the value is less then or equalls to 1
  if (value <= 1) {
    return value;
  }

  return (
    recursiveFibonacci(value - 2) + recursiveFibonacci(value - 1)
  );
}
