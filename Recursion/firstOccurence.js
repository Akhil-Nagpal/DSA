// *-*-*-*-*-* FIND FIRST OCCURANCE IN ARRAY *-*-*-*-*-*
// array = [3, 4, 1, 5, 6, 7]
// currentIndex = 0
// findMe = 5
// Output = 3
// if not found = -1

// *-*-*-*-*-* Itrative Approach *-*-*-*-*-*
// function firstOcc(arr, findMe, currentIndex) {
//   // check if the current Index is less then array length in a loop
//   while (currentIndex < arr.length) {
//     // check if the array's current index is equals to find me
//     if (arr[currentIndex] === findMe) {
//       return currentIndex;
//     }
//     currentIndex = currentIndex + 1;
//   }
//   return -1;
// }

// *-*-*-*-*-* Recursive Approach *-*-*-*-*-*
function recursiveFirstOcc(arr, findMe, currentIndex) {
  // Base Case -> if the length of array got equalls to current Index
  if (arr.length === currentIndex) {
    return -1;
  }

  //   Base Case -> if the array length got equalls to find Me
  if (arr[currentIndex] === findMe) {
    return currentIndex;
  }

  return recursiveFirstOcc(arr, findMe, currentIndex + 1);
}
// ----- First way to execute -----
console.log(recursiveFirstOcc([2, 1, 4, 5, 8, 7], 5, 0));

// ----- Second way to execute
// Helper function to start the recursion from current index -> 0
// function findFirstOcc(arr, findMe) {
//   return recursiveFirstOcc(arr, findMe, 0);
// }

// ----- Usage -----
// console.log(findFirstOcc([2, 1, 4, 5, 8, 7], 5));
