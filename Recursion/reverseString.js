// *-*-*-*-*-* REVERSE A STRING *-*-*-*-*-*

// ----- Iterative Approach -----
function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;

  while (length >= 0) {
    reverse = reverse + string[length];
    length = length - 1;
  }
  return reverse;
}
console.log(reverseString("hello"));

// ----- Recursive Approach -----
function recursiveRevString(string) {
  // Base Case -> when the string is empty
  if (string === "") {
    return string;
  }

  return (
    string[string.length - 1] +
    recursiveRevString(string.substring(0, string.length - 1))
  );
}
console.log(recursiveRevString("Hello"));
