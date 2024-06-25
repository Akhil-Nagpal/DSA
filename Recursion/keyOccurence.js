// *-*-*-*-* FIND OCCURANCE OF VALUE WITH GIVEN KEY IN AN ARRAY *-*-*-*-*

// *-*-*-*-* Iterative Approach *-*-*-*-*
function keyOccurance(array, key) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      result = result + 1;
    }
  }
  return result;
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(keyOccurance([2, 1, 2, 5, 6], 2));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursiveKeyOcc(array, key, index = 0) {
  // Base Case -> if the length of index is greater than or equalls to array length the return 0
  if (index >= array.length) {
    return 0;
  }

  // Recursive Case
  //   return (
  //     (array[index] === key ? 1 : 0) +
  //     recursiveKeyOcc(array, key, index + 1)
  //   );

  //   Another Recursive Approach
  if (array[index] === key) {
    return 1 + recursiveKeyOcc(array, key, index + 1);
  } else {
    return 0 + recursiveKeyOcc(array, key, index + 1);
  }
}

// console.log(recursiveKeyOcc([2, 1, 2, 5, 6], 2));
