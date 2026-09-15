// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
// Return the minimum integer k such that you can eat all the bananas within h hours.
// Input: piles = [1,4,3,2], h = 9
// Output: 2

function minEatingSpeed(piles, h) {
  // optimised code using binary search
  function canFinish(piles, k, h) {
    let totalHours = 0;
    for (let pile of piles) {
      let hours = Math.ceil(pile / k);
      totalHours += hours;
    }
    return totalHours <= h;
  }
  let left = 1;
  let right = Math.max(...piles);

  let result = Math.max(...piles);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canFinish(piles, mid, h)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([1, 1, 1, 1], 4)); // 1
