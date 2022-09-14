/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return res

    let res = [],
        stack = [root]

    while (stack.length) {
        const node = stack.pop()
        res.unshift(node.val)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return res
}

// const postorderTraversalNode = function (node, arr) {
//     // body
//     if (node) {
//         postorderTraversalNode(node.left, arr)
//         postorderTraversalNode(node.right, arr)
//         arr.push(node.val)
//     }
//     return arr
// }
// @lc code=end
