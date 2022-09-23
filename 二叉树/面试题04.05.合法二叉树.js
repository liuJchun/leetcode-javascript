/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const helper = (root, low, uper) => {
    if (root === null) {
        return true
    }
    if (root.val <= low || root.val >= uper) {
        return false
    }
    return helper(root.left, low, root.val) && helper(root.right, root.val, uper)
}
var isValidBST = function (root) {
    return helper(root, -Infinity, Infinity)
}
