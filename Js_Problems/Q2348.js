/*Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array. */

nums = [1, 3, 0, 0, 2, 0, 0, 4];

let zeroFilledSubarray = function (nums) {
  let mp = new Map();
  let subArr = 0;
  for (let i = 0; i < nums; i++) {
    nums.map((num) => {
      if (num === 0) {
        subArr++;
      } else if (num === nums[i]) {
        subArr++;
      }
    });
  }
  return subArr;
};
