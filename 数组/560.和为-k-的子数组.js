/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const f = { 0: 1 }
  let count = 0
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]

    const target = count - k
    if (f[target] !== undefined) {
      ans += f[target]
    }

    if (f[count] === undefined) {
      f[count] = 1
    } else {
      f[count]++
    }
  }

  return ans
}
// @lc code=end
