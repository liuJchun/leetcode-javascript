/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 使用数学统计分析
var kthGrammar = function (n, k) {
    if (n === 1) {
        return 0
    }
    if (k % 2 === 0) {
        return kthGrammar(n - 1, k / 2) === 0 ? 1 : 0
    } else {
        return kthGrammar(n - 1, Math.floor(k / 2) + 1)
    }
}
// @lc code=end
