// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Input: s = "XYYX", k = 2
// Output: 4

// Brute Force
// function characterReplacement(s, k) {
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     let map = new Map();
//     let mapFreq = 0;
//     for (let j = i; j < s.length; j++) {
//       map.set(s[j], (map.get(s[j]) || 0) + 1);
//       mapFreq = Math.max(mapFreq, map.get(s[j]));

//       let changesNeeded = j - i + 1 - mapFreq;

//       if (changesNeeded <= k) {
//         max = Math.max(max, j - i + 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return max;
// }

// Optimised Code using Sliding Window
function characterReplacement(s, k) {
  let max = 0;
  let map = new Map();
  let mapFreq = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    mapFreq = Math.max(mapFreq, map.get(s[right]));

    let changesNeeded = right - left + 1 - mapFreq;

    if (changesNeeded > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("AAAA", 2)); // 4
