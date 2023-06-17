/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) {
    return null
  }
  // 使用快慢指针
  let slow = (fast = head)
  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let cur = head
      // 相遇点到 入环 的距离 等于 head 到入环的距离
      while (cur !== slow) {
        slow = slow.next
        cur = cur.next
      }
      return cur
    }
  }
  return null
}
// @lc code=end
