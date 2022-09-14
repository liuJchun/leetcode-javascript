/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

const { RuleTester } = require("eslint")

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    if (!ops) {
        return 0
    }

    const getCurCode = function (type, arr) {
        const RULES = {
            "+": function (arr) {
                arr[arr.length] = arr[arr.length - 2] + arr[arr.length - 1]
            },
            D: function (arr) {
                arr[arr.length] = arr[arr.length - 1] * 2
            },
            C: function (arr) {
                arr.pop()
            },
            default: function (arr) {
                arr.push(+type)
            },
        }

        ;(RULES[type] || RULES.default)(arr)
    }
    const sums = []
    for (let i = 0; i < ops.length; i++) {
        getCurCode(ops[i], sums)
    }
    console.log(sums.join(", "))

    return sums.reduce((pre, cur) => pre + cur, 0)
}
// @lc code=end
