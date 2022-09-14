/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (!root) return 0 
    let max = 1n
    // 每层节点的信息： 索引 + 节点 (记录中间非空节点)，记录每层的最大宽度，动态 赋值 -》 max
    let nodes = [{ index: 1n, node: root }]

    while (nodes.length) {
        const width = nodes[nodes.length - 1].index - nodes[0].index + 1n
        if (width > max) max = width

        const curLevelNodes = []
        for (const { index, node } of nodes) {
            node.left && curLevelNodes.push({ index: 2n * index, node: node.left })
            node.right && curLevelNodes.push({ index: 2n * index + 1n, node: node.right })
        }
        nodes = curLevelNodes 
    }
    return max
}

// @lc code=end
