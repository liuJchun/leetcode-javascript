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
    let res = "",
        count = 0

    for (var i = 0; i < s.length; i++) {
        const curStr = s[i]
        if (curStr === "(") {
            if (count > 0) res += curStr
            count++
        }
        if (curStr === ")") {
            if (count > 1) res += curStr
            count--
        }
    }
    return res
}
// @lc code=end
