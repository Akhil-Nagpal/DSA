// find the smallest element from an array

let nums = [56, 12, 89, 34, 7, 65, 21, 43, 3];

let min = nums[0];

function smallest() {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  console.log(min);
}
smallest();
