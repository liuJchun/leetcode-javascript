/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const arr = preorder.split(",")
    const stack = [1]
  
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) return false

        if (arr[i] === "#") {
            stack[stack.length - 1]-- 
            if (stack[stack.length - 1] === 0) {
                stack.pop()
            }
        } else {
            stack[stack.length - 1]--
            if (stack[stack.length - 1] === 0) {
                stack.pop()
            }
            stack.push(2)
        }
    }
    console.log(stack)
    return stack.length === 0
}
// @lc code=end
