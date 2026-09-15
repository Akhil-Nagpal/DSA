// sort the unsorted array using bubble sort

let nums = [64, 34, 25, 12, 22, 11, 90, 5];

function bubbleSort() {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}
bubbleSort();
console.log(nums);
