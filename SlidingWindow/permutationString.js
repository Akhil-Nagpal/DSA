// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Input: s1 = "abc", s2 = "lecabee"
// Output: true

// Brute Force
// function permutation(s1, s2) {
//   // count th freq of s1 elements
//   let s1Map = new Map();

//   for (let i = 0; i < s1.length; i++) {
//     s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
//   }

//   // count the freq of s2
//   for (let i = 0; i <= s2.length - s1.length; i++) {
//     let s2Map = new Map();
//     for (let j = i; j < i + s1.length; j++) {
//       s2Map.set(s2[j], (s2Map.get(s2[j]) || 0) + 1);
//     }

//     // now we have both maps
//     // compare both maps with each, if they match then return true
//     let match = true;

//     for (let [key, value] of s1Map) {
//       if (s2Map.get(key) !== value) {
//         match = false;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// }

// Optimised Code using Sliding Window
function permutation(s1, s2) {
  // build both maps
  let s1Map = new Map();
  let s2Map = new Map();

  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
  }

  //   compare both maps - for comparing bilod a helper function
  function isMapEqual(s1Map, s2Map) {
    // check if the size of both maps are equal or not, if not return false
    if (s1Map.size !== s2Map.size) return false;
    // check if both maps have equal key and value pair
    for (let [key, value] of s1Map) {
      if (s2Map.get(key) !== value) return false;
    }
    return true;
  }
  //   check if the maps are equal or not
  if (isMapEqual(s1Map, s2Map)) return true;

  //   if the current maps are not equal then move to second window
  //   initialize the pointer to track the window
  let left = 0;
  let right = s1.length - 1;

  while (right < s2.length - 1) {
    // remove the element from left side both key and value
    // value removed
    s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
    // if value is 0 then delete the key from window
    if (s2Map.get(s2[left]) === 0) s2Map.delete(s2[left]);

    // move the pointers forward
    left++;
    right++;

    // increase the value of right element so that it can be added in window
    s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);

    // compare both maps if the y match or not
    if (isMapEqual(s1Map, s2Map)) return true;
  }
  return false;
}

console.log(permutation("ab", "eidbaooo")); // true
console.log(permutation("ab", "eidboaoo")); // false
console.log(permutation("adc", "dcda")); // true
