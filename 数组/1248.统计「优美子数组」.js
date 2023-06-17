/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  if (nums.length == 0) {
    return 0
  }
  let count = 0
  let f = { 0: 1 }
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    //  奇数
    if (nums[i] & 1) {
      count++
    }

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
