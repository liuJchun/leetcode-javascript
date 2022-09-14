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
    const RULES = {
        "{": "}",
        "(": ")",
        "[": "]",
    }
    const stack = [] 
    for (const ch of s) {
        if (Object.keys(RULES).includes(ch)) {
            stack.push(ch)
        } else {
            if (RULES[stack[stack.length - 1]] === ch) {
                stack.pop()
                continue
            }
            return false
        }
    }
    return stack.length === 0
}
// @lc code=end
