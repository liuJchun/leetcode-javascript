/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(s[i])
        break
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop()
        } else {
          return false
        }
        break
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop()
        } else {
          return false
        }
        break
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop()
        } else {
          return false
        }
        break
      default:
        continue
    }
  }
  return stack.length === 0
}
// @lc code=end
