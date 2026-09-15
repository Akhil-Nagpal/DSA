// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Input: s = "zxyzxyz"
// Output: 3

// Brute Force
// function longestSubstring(s) {
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     let set = new Set();
//     for (let j = i; j < s.length; j++) {
//       if (set.has(s[j])) break;
//       set.add(s[j]);
//       let windowLength = j - i + 1;
//       max = Math.max(max, windowLength);
//     }
//   }
//   return max;
// }

// Optimised Coide using Sliding Window
function longestSubstring(s) {
  let max = 0;
  let left = 0;
  let right = 0;
  let set = new Set();

  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    let windowLength = right - left + 1;

    max = Math.max(max, windowLength);
    right++;
  }
  return max;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
console.log(longestSubstring("")); // 0
