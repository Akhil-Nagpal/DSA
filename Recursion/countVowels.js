// *-*-*-*-*-*-* COUNT VOWELS *-*-*-*-*-*-*

function isVowel(character) {
  let lowerChar = character.toLowerCase();
  let vowels = "aeiou";

  if (vowels.indexOf(lowerChar) !== -1) {
    return true;
  } else {
    return false;
  }
}
// *-*-*-*-*-*-* Itrative Approach *-*-*-*-*-*-*
function countVowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("audio"));

// *-*-*-*-*-*-* Recursive approach *-*-*-*-*-*-*-*
function recursiveCountVowels(string, stringLength) {
  console.log(
    `Count: ${stringLength} current string: ${string.substring(
      0,
      stringLength
    )}`
  );
  // Base Case
  if (stringLength === 1) {
    console.log("Base Case hit");
    console.log("Base Case:", Number(isVowel(string[0])));
    return Number(isVowel(string[0]));
  }
  // recursive method
  //   return (
  //     recursiveCountVowels(string, stringLength - 1) +
  //     isVowel(string[stringLength - 1])
  //   );

  let result =
    recursiveCountVowels(string, stringLength - 1) +
    isVowel(string[stringLength - 1]);

  console.log(
    `count after checking: ${string[stringLength - 1]}: ${result}`
  );
  return result;
}

// *-*-*-*-* USAGE *-*-*-*-*
let myString = "Hello";
console.log(recursiveCountVowels(myString, myString.length));
