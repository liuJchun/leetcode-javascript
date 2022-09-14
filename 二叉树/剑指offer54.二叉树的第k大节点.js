/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 二叉搜索树，是 中序遍历出来，从小到达 排序
// 使用 逆中序 则是 从大到小排列 
var kthLargest = function (root, k) {
    return getNodeArr(root)[k - 1]
}

// 后中序遍历
let getNodeArr = root => {
    const res = []
    if (!root) return res
    res.push(...getNodeArr(root.right))
    res.push(root.val)
    res.push(...getNodeArr(root.left))
    return res
}
