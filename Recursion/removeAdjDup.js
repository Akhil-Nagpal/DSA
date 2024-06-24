// *-*-*-*-* REMOVE ADJACENT DUPLICATES *-*-*-*-*

// *-*-*-*-* Iterative Approach *-*-*-*-*
function removeAdjDup(inputString) {
  // make a vairable to track the result
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    // check if the input string last value is equalls to index value or if the input string index value is note equalls to input string index next value
    if (
      i === inputString.length - 1 ||
      inputString[i] !== inputString[i + 1]
    ) {
      result += inputString[i];
    }
  }
  return result;
}
// *-*-*-*-* USAGE *-*-*-*-*
console.log(removeAdjDup("hhello"));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursiveRemoveAD(inputString) {
  // Base Case
  if (inputString <= 1) {
    return inputString;
  }

  // Recursve case
  //   Check if the input string first value is equalls to its secong value
  if (inputString[0] === inputString[1]) {
    return recursiveRemoveAD(inputString.substring(1));
  }

  return inputString[0] + recursiveRemoveAD(inputString.substring(1));
}

// *-*-*-*-* USAGE *-*-*-*-*
console.log(recursiveRemoveAD("aaaaah"));
