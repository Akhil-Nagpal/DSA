// *-*-*-*-* CHECK PALINDROME *-*-*-*-*

// *-*-*-*-* Itrative Appraoch *-*-*-*-*
function palindrome(string) {
  let leftIndex = string[0];
  let rightIndex = string.length - 1;

  while (leftIndex < rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(palindrome("madam"));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursivePalindrome(string) {
  // Base Case
  if (string.length <= 1) {
    return true;
  }

  // Recursive Case
  if (string[0] === string[string.length - 1]) {
    return recursivePalindrome(
      string.substring(1, string.length - 1)
    );
  } else {
    return false;
  }
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(recursivePalindrome("hello"));
