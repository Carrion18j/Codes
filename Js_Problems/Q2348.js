/*Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array. */

nums = [1, 3, 0, 0, 2, 0, 0, 4];

let sunarray = 0;
let i = 0;

while (i < nums.length) {
  nums.map(() => {
    if (nums[i] === 0) {
      sunarray++;
      if (nums[i] === nums[++i]) {
        sunarray++;
        if (nums[i] === nums[++i] && nums[++i] === nums[i + 2]) {
          sunarray++;
        }
      }
    }
  });
  i++;
}
console.log(sunarray);
