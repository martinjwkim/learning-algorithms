/* You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
If target is found in the array return its index, otherwise, return -1.
*/

const search = (nums, target) => {
  let max, min;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i
    if (nums[i + 1] < nums[i]) {
      max = nums[i];
      min = nums[i+1]
    }
    if (target > max) return -1
    if (target < min) return -1
  }

  return -1;
}