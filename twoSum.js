/**
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};

  nums.forEach((v, k) => {
      map[v] = k;
  
  });
  console.log(map);
  

  for (let i = 0; i < nums.length; i++) {
      let complement = nums[i];
      console.log(complement);
      if (map[target - complement]) {
          return [i, map[target - nums[i]]];
      }
  }
}

let testArr1 = [2, 7, 11, 15];
let target1 = 9;

console.log(twoSum(testArr1, target1));