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
        const res = []
        for (const code of str) {
            if (code === "#") {
                res.pop()
            } else {
                res.push(code)
            }
        }
        return res.join("")
    }
    return getBackStr(s) === getBackStr(t)
}
// @lc code=end
