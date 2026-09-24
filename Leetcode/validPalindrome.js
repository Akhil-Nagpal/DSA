// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example:
// Input: s = "Was it a car or a cat I saw?"
// Output: true

// ----- Brute Force -----

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    // approach - In order to check the characters:
    // 1 - we need to clean the str removing any special characters or spaces, remaining alphanumeric characters only.
    // 2 - no reverse the string
    // 3 - compare both revered string and cleaned str, if they match return true, if not return false

    let cleanStr = "";

    // looping through string
    for (let ch of s) {
      // check if the ch is alphanumeric ch or not
      if (/[A-Za-z0-9]/.test(ch)) {
        // if yes, then add it cleanStr
        cleanStr += ch.toLowerCase();
      }
    }
    // now reverse the string
    let reversed = cleanStr.split("").reverse().join("");

    // now check if both are same or not if yes then return true
    if (reversed === cleanStr) return true;
    return false;
  }
}

// ----- Optimized Approach -----
// Using Two Pointers
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    // approach - unlike brute force here we use opposite pointers to track and check if the pointers have same character or not
    // 1 - initiate pointers
    // 2 - loop until left is smaller then right
    // 3 - check if the pointer is non alphanumeric character if yes make pointers move
    // if it doesn't match return false
    // after the loop if it doesn't return false then return true;

    let l = 0;
    let r = s.length - 1;

    // loop
    while (l < r) {
      // check
      while (l < r && !/[a-zA-Z0-9]/.test(s[l])) l++;
      while (l < r && !/[a-zA-Z0-9]/.test(s[r])) r--;

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }
    return true;
  }
}
