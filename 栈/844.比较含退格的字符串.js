/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const getBackStr = str => {
    const stack = []
    for (const char of str) {
      switch (char) {
        case '#':
          stack.pop()
          break
        default:
          stack.push(char)
      }
    }
    return stack.join('')
  }
  return getBackStr(s) === getBackStr(t)
}
// @lc code=end
