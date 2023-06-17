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
    const res = []
    // push
    for (const push of pushed) {
        res.push(push)
        while (res.length && res[res.length - 1] === popped[0]) {
            res.pop()
            popped.shift()
        }
    }
    // pop

    // for (const pop of popped) {
    //     if (pop === res[res.length - 1]) {
    //         res.pop()
    //         continue
    //     }
    //     return false
    // }

    return res.length === 0
}
// @lc code=end
