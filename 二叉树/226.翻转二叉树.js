/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null
    }
    // let leftNode = root.left
    // let rightNode = root.right
    // root.left = rightNode
    // root.right = leftNode
    // invertTree(root.left)
    // invertTree(root.right)
    ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root
}
// @lc code=end
