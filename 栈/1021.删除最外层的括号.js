/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = []
  let str = '',
    startIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else {
      stack.pop(')')
    }
    if (stack.length === 0) {
      str += s.slice(startIndex + 1, i)
      startIndex = i + 1
    }
  }
  return str
}
// @lc code=end
