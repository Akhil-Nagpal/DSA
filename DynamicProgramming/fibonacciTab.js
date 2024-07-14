// *-*-*-*-* FIND THE FIBONACCI USING DYNAMIC PROGRAMMING WITH TABULATION APPROACH *-*-*-*-*

function fibonacciTab(n) {
  // Base Cases
  // Case 1 -> if n is 0, return 0 (since the 0th Fibonacci number is 0)
  if (n === 0) {
    return 0;
  }

  // Case 2 -> if n is 1, return 1 (since the 1st Fibonacci number is 1)
  if (n === 1) {
    return 1;
  }

  // Initialize an array to store Fibonacci numbers up to n
  let table = new Array(n + 1);

  // Base values for the table
  table[0] = 0; // Fibonacci(0)
  table[1] = 1; // Fibonacci(1)

  // Fill the table with Fibonacci numbers from 2 to n
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2]; // Fibonacci(i) = Fibonacci(i-1) + Fibonacci(i-2)
  }

  return table[n];
}

// Example usage: Print the Fibonacci number
console.log(fibonacciTab(6));
