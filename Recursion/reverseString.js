// *-*-*-*-*-* REVERSE A STRING *-*-*-*-*-*

// ----- Iterative Approach -----
// function reverseString(string) {
//   let reverse = "";
//   let length = string.length - 1;

//   while (length >= 0) {
//     reverse = reverse + string[length];
//     length = length - 1;
//   }
//   return reverse;
// }
// console.log(reverseString("hello"));

// ----- Recursive Approach -----
function recursiveRevString(string) {
  // Base Case -> when the string is empty
  if (string === "") {
    return string;
  }
  //   Actuall application
  //   return (
  //     string[string.length - 1] +
  //     recursiveRevString(string.substring(0, string.length - 1))
  //   );

  let recursivePart = recursiveRevString(
    string.substring(0, string.length - 1)
  );

  let result = string[string.length - 1] + recursivePart;

  console.log(
    `Reversing: Last char: ${
      string[string.length - 1]
    } added in front of ${recursivePart} to form a result: ${result}`
  );

  return result;
}
console.log(recursiveRevString("hello"));
