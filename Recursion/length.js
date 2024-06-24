// *-*-*-*-* IMPLEMENT LENGTH WITHOUT USING LENGTH *-*-*-*-*

// *-*-*-*-* Itrative Approach *-*-*-*-*
function findLength(string) {
  let result = "";

  for (character of string) {
    result++;
  }
  return result;
}

console.log(findLength("Hello"));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursiveFindLength(string) {
  // Base Case -> if the string is empty
  if (string === "") {
    return 0;
  }

  // Recursive Case
  return 1 + recursiveFindLength(string.substring(1));
}

console.log(recursiveFindLength("Hello"));
