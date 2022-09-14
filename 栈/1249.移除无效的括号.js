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
    // 方案一
    // const stack = []
    // let res = ""
    // for (const ch of s) {
    //     if (ch !== "(" && ch !== ")") {
    //         res += ch
    //     } else {
    //         if (ch === "(") {
    //             stack.push(ch)
    //             res += ch
    //         } else if (ch === ")" && stack[stack.length - 1] === "(") {
    //             stack.pop()
    //             res += ch
    //         }
    //     }
    // }
    // let len = stack.length
    // while (len--) {
    //     const index = res.lastIndexOf("(")
    //     res = res.slice(0, index) + res.slice(index + 1)
    // }
    // return res

    const leftStack = [],
        rightStack = []

    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (ch === "(") {
            leftStack.push(i)
        }
        if (ch === ")") {
            if (leftStack.length > 0) {
                leftStack.pop()
            } else {
                rightStack.push(i)
            }
        }
    }

    const res = [...s],
        loopArr = leftStack.concat(rightStack)
    for (const index of loopArr) {
        res[index] = ""
    }

    return res.join("")
}
// @lc code=end
