/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  You can return the answer in any order.
 
 const twoSum = (nums, target) => {
    let len = nums.length
    // because we can assume only one solution and can return in any order
    if (len == 2) return [0,1];
    
    let map = {};
    
    for (let i = 0; i < len; i++) {
        // map to a key => value pair 
        map[nums[i]] = i
    }
    for (let i = 0; i < len; i++) {
        let difference = target - nums[i]
        let secondVal = map[difference]
        // check if the second value is undefined or if it's equal to i (can't use the same element)
        if (secondVal !== undefined && secondVal != i) return [i, secondVal];
    }
};