// *-*-*-*-* BALANCED PARANTHESES *-*-*-*-*

// *-*-*-*-* Recursive Approach *-*-*-*-*
function balancedParantheses(array, startIndex = 0, count = 0) {
  // Base Case -> if the start index is equalls to array length then check count is eqalls to zero or not, if yes then return it
  if (startIndex === array.length) {
    return count === 0;
  }

  //   Check if the count is less then 0 the nreturn false
  if (count < 0) {
    return false;
  }

  // Recursive Case
  // Case 1 -> if the strat index of array is equalls to "(" then move to next and add to count
  if (array[startIndex] === "(") {
    return balancedParantheses(array, startIndex + 1, count + 1);
  } else if (array[startIndex] === ")") {
    // Case 2 -> if the start index is equalls to ")" then move to next and subtract from count
    return balancedParantheses(array, startIndex + 1, count - 1);
  } else {
    return false;
  }
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(balancedParantheses(["(", "(", ")", ")"], 0, 0));
