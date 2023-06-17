/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((a, b) => a + b)
  let preSuffsix = [0]
  for (let i = 0; i < nums.length; i++) {
    if (2 * preSuffsix[i] + nums[i] === sum) {
      return i
    }
    preSuffsix[i + 1] = preSuffsix[i] + nums[i]
  }
  return -1
}
// @lc code=end
