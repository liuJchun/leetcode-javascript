/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [],
    // 记录多余的 index
    deletIndexStack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(')
      deletIndexStack.push(i)
    } else if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
        deletIndexStack.pop()
      } else {
        deletIndexStack.push(i)
      }
    } else {
      continue
    }
  }
  // 扫描 index
  let str = s.split('')
  for (let i = 0; i < deletIndexStack.length; i++) {
    str[deletIndexStack[i]] = ''
  }
  return str.join('')
}
// @lc code=end
