// find the second largest element from an array

let nums = [18, 7, 42, 13, 29, 42, 5, 36, 24];

let max = nums[0];
let secondMax = 0;

function secLargest() {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
    } else if (nums[i] < max && nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }
  console.log(secondMax);
}
secLargest();
