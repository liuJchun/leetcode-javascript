/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = []
  for (let i = 0; i < operations.length; i++) {
    const operate = operations[i]

    switch (operate) {
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        break

      case 'D':
        stack.push(2 * stack[stack.length - 1])
        break

      case 'C':
        stack.pop()
        break

      default:
        stack.push(Number(operate) || 0)
    }
  }
  return stack.reduce((pre, cur) => pre + cur, 0)
}
// @lc code=end
