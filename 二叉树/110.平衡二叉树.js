/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    // if (root === null) return true
    return getNodeDepth(root) !== -1
}

// 不存在不平衡的二叉树，返回 -1
const getNodeDepth = (node, depth = 0) => {
    if (node === null) return 0
    const leftDepth = getNodeDepth(node.left, depth + 1)
    const rightDepth = getNodeDepth(node.right, depth + 1)
    // 子树 存在不平衡的 二叉树
    if (leftDepth < 0 || rightDepth < 0) return -1

    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1
    }
    return Math.max(leftDepth, rightDepth) + 1
}

// @lc code=end
