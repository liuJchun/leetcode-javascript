/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (65.70%)
 * Likes:    766
 * Dislikes: 0
 * Total Accepted:    244.4K
 * Total Submissions: 372.2K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1,3,4]
 *
 *
 * 示例 2:
 *
 *
 * 输入: [1,null,3]
 * 输出: [1,3]
 *
 *
 * 示例 3:
 *
 *
 * 输入: []
 * 输出: []
 *
 *
 *
 *
 * 提示:
 *
 *
 * 二叉树的节点个数的范围是 [0,100]
 * -100
 *
 *
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
var rightSideView = function (root) {
    if (root === null) return []
    // 每层需要遍历的 nodes
    let loopNodes = [root]
    let res = []
    while (loopNodes.length) {
        // 记录最有边一个
        res.push(loopNodes[loopNodes.length - 1].val)
        const levelNodes = []
        for (const node of loopNodes) {
            if (node.left) {
                levelNodes.push(node.left)
            }
            if (node.right) {
                levelNodes.push(node.right)
            }
        }
        loopNodes = levelNodes
    }
    return res
}
// @lc code=end
