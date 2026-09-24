// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
// Input: s = "abc"
// Output: false

// ----- Brute Force -----

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome = function (s) {
    // checking is the original string is already a palindrome

    let revStr = s.split("").reverse().join("");
    if (s === revStr) return true;

    // now if the string is not palindrome, then loop through it
    for (let i = 0; i < s.length; i++) {
      // build the string while removing ith value
      let str = "";
      for (let j = 0; j < s.length; j++) {
        // check if th both indexes are same if yes skip that
        if (i === j) continue;

        // build the string
        str += s[j];
      }
      // reverse the builded string
      let rev = str.split("").reverse().join("");

      // check if both string are same if yes return true;
      if (str === rev) return true;
    }
    return false;
  };
}

// ----- Optimized Approach -----
// Using Two Pointers
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome = function (s) {
    // Optimised code using two pointers

    let l = 0;
    let r = s.length - 1;

    // Loop until l and r meet
    while (l < r) {
      // If characters match, move both pointers inward
      if (s[l] === s[r]) {
        l++;
        r--;
      } else {
        // Possibility 1: remove/skip the left character
        let left = l + 1;
        let right = r;

        while (left < right) {
          if (s[left] !== s[right]) {
            break;
          }

          left++;
          right--;
        }

        // Left character removal worked
        if (left >= right) {
          return true;
        }

        // Possibility 2: remove/skip the right character
        left = l;
        right = r - 1;

        while (left < right) {
          if (s[left] !== s[right]) {
            break;
          }

          left++;
          right--;
        }

        // Right character removal worked
        if (left >= right) {
          return true;
        }

        // Neither possibility worked
        return false;
      }
    }

    // Original string was already a palindrome
    return true;
  };
}
