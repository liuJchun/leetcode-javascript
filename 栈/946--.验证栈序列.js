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
  if (pushed.length !== popped.length) {
    return false
  }

  const stack = []
  const popQeque = [...popped]

  for (let i = 0; i < pushed.length; i++) {
    const pushItem = pushed[i]
    stack.push(pushItem)

    while (stack.length && stack[stack.length - 1] === popQeque[0]) {
      stack.pop()
      popQeque.shift()
    }
  }

  return stack.length === 0
}
// @lc code=end
