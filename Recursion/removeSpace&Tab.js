// *-*-*-*-* REMOVE SPACES AND TABS FROM GIVEN STRING *-*-*-*-*

// *-*-*-*-* Iterative Approach *-*-*-*-*
function removeSpaceTab(inputString) {
  let result = "";

  //   Create a loop for itrating till the length of input string
  for (let i = 0; i < inputString.length; i++) {
    let character = inputString[i];

    // check if the character is a tab or space or not
    if (character !== " " && character !== "\t") {
      result += character;
    }
  }
  return result;
}

// *-*-*-*-* USAGE *-*-*-*-*
console.log(removeSpaceTab("Hello World"));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursiveRemoveST(inputString) {
  // Base Case
  if (inputString.length === 0) {
    return "";
  }
  // Dividing input string into two parts
  let firstChar = inputString[0];
  let restOfString = inputString.slice(1);

  //   Recursive Case
  if (firstChar === " " || firstChar === "\t") {
    return recursiveRemoveST(restOfString);
  }
  return firstChar + recursiveRemoveST(restOfString);
}

console.log(recursiveRemoveST("Hello World"));
