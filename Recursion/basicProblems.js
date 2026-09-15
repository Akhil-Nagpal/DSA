// Question 1 ->
// Print your name "N" times using recursion

// function Name(i, n) {
//   // Base Case
//   if (i > n) return;
//   // Recursive Case
//   console.log("Ak");

//   return Name(i + 1, n);
// }
// Name(1, 5);

// Question 2 ->
// Print numbers 1 - N using recursion
// function PrintNumbers(i, n) {
//   // Base Case
//   if (i > n) return;

//   //   Recursive Case
//   console.log(i);

//   return PrintNumbers(i + 1, n);
// }
// PrintNumbers(1, 5);

// Question 3 ->
// Print number from "N" - 1 using recursion
// function Numbers(i, n) {
//   // Base Case
//   if (i < 1) return;

//   //   Recursive Case
//   console.log(i);
//   return Numbers(i - 1, n);
// }
// Numbers(5, 5);

// Question 4 ->
// Print numbers from 1 - "N" using recursion but with Backtracking
// So what is backtracking - Backtracking is a algorithmic technique that is implemented using recursion. It searches a solution by building a solution incrementally
function PrintNums(i, n) {
  // Base Case
  if (i < 1) return;
  // Recursive Case
  return PrintNums(i - 1, n);
  console.log(n);
}
PrintNums(5, 5);
