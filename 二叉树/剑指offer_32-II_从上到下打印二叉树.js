/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let nextLevelNodes = [root]
    const res = []
    while (nextLevelNodes.length) {
        let tempNodes = []

        res.push(nextLevelNodes.map(el => el.val))

        for (const node of nextLevelNodes) {
            node.left && tempNodes.push(node.left)
            node.right && tempNodes.push(node.right)
        }
        nextLevelNodes = tempNodes
    }
    return res
}
