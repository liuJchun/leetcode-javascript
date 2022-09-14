/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    return (
        !!A &&
        !!B &&
        (isIncludeNode(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
    )
}

const isIncludeNode = (A, B) => {
    if (!B) return true
    if (!A || A.val !== B.val) return false
    // equal
    return isIncludeNode(A.left, B.left) && isIncludeNode(A.right, B.right)
}
