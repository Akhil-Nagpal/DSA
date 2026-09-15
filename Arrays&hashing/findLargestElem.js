// find the largest element from an array

let nums = [14, -3, 27, 8, 42, 5, -11, 31, 19];

function largest() {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  console.log(max);
}
largest();
