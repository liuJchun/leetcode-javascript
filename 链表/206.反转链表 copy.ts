/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 使用递归实现
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  let tail = head.next
  const p = reverseList(head.next)
  // head.next = null
  head.next = tail.next
  console.log(tail, tail.next, p)
  tail.next = head
  return p
}
// @lc code=end
