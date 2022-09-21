/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (63.45%)
 * Likes:    869
 * Dislikes: 0
 * Total Accepted:    169.4K
 * Total Submissions: 266.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 *
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 *
 * 请将其重新排列后变为：
 *
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[1,4,2,3]
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[1,5,2,4,3]
 *
 *
 *
 * 提示：
 *
 *
 * 链表的长度范围为 [1, 5 * 10^4]
 * 1 <= node.val <= 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return null

    let leftNode = (rightNode = new ListNode(null, head))
    while (rightNode && rightNode.next) {
        leftNode = leftNode.next
        rightNode = rightNode.next && rightNode.next.next
    }

    rightNode = leftNode.next
    leftNode.next = null
    leftNode = head

    rightNode = reverseList(rightNode)
    while (rightNode) {
        const lNext = leftNode.next
        const rNext = rightNode.next

        rightNode.next = leftNode.next
        leftNode.next = rightNode

        leftNode = lNext
        rightNode = rNext
    }
    return head
}

function reverseList(head) {
    if (!head) return null
    const reversePreHead = new ListNode(null, null)
    let cur = head
    while (cur) {
        const temp = new ListNode(cur.val, reversePreHead.next)
        reversePreHead.next = temp
        cur = cur.next
    }
    // 修复 head 指针
    head.val = reversePreHead.next.val
    head.next = reversePreHead.next.next

    return reversePreHead.next
}
// @lc code=end
