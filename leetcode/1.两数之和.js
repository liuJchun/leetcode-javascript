/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        obj[item] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const objIndex = obj[target - item]

        if (objIndex !== undefined && i !== objIndex) {
            return [i, objIndex]
        }
    }
    return []
}
// @lc code=end
