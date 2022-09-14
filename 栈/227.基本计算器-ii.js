/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = []
    let arr = [...s.trim().split(/\s*/g), "+"]
    let preSign = "+"
    let lastNum = 0

    for (let i = 0; i < arr.length; i++) {
        const curValue = arr[i]
        console.log(curValue)
        if (isNaN(curValue)) {
            switch (preSign) {
                case "+":
                    stack.push(lastNum)
                    break
                case "-":
                    stack.push(-lastNum)
                    break
                case "*":
                    stack.push(stack.pop() * lastNum)
                    break
                case "/":
                    stack.push((stack.pop() / lastNum) | 0)
                    break
                default:
                    break
            }
            preSign = curValue
            lastNum = 0
        } else {
            lastNum = lastNum * 10 + Number(curValue)
        }
    }
    return stack.reduce((a, b) => a + b)
}
// @lc code=end
