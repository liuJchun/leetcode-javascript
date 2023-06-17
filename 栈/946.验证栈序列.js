/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  // 入栈 index (pushIndex = 0)
  // 出栈 index (popIndex = 0)
  for (let pushIndex = 0, popIndex = 0; popIndex < popped.length; popIndex++) {
    while (
      pushIndex < pushed.length &&
      (!stack.length || stack[stack.length - 1] !== popped[popIndex])
    ) {
      stack.push(pushed[pushIndex])
      pushIndex++
    }
    if (stack[stack.length - 1] !== popped[popIndex]) {
      return false
    }
    stack.pop()
  }
  return true
}
// @lc code=end
