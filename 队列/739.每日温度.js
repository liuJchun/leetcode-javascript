/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // map
  const res = []
  const stack = []
  for (let i = 0; i < temperatures.length; i++) {
    const item = temperatures[i]
    res[i] = 0

    while (item > temperatures[stack[stack.length - 1]] && stack.length > 0) {
      const topIndex = stack.pop()
      res[topIndex] = i - topIndex
    }
    stack.push(i)
  }
  return res
}
// @lc code=end
