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
  // 递归方式
  // if (root === null) return []
  // const res = []
  // if (root.left) {
  //   res.push(...postorderTraversal(root.left))
  // }
  // if (root.right) {
  //   res.push(...postorderTraversal(root.right))
  // }
  // res.push(root.val)
  // return res

  // 迭代方式
  if (root === null) {
    return []
  }
  // 记录结果
  const res = []
  // node 栈
  let stack = []
  // 下一步操作：0 压入左子树， 1 压入右子树， 2 弹出栈
  let statusStack = []
  stack.push(root)
  statusStack.push(0)

  while (stack.length !== 0) {
    const topStatus = statusStack.pop()
    const top = stack[stack.length - 1]

    switch (topStatus) {
      case 0:
        statusStack.push(1)
        if (top.left !== null) {
          stack.push(top.left)
          statusStack.push(0)
        }
        break
      case 1:
        statusStack.push(2)
        if (top.right !== null) {
          stack.push(top.right)
          statusStack.push(0)
        }
        break
      case 2:
        // statusStack.pop()
        const topNode = stack.pop()
        res.push(topNode.val)
        break
    }
  }
  return res
}
// @lc code=end
