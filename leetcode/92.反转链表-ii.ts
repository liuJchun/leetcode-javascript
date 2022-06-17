/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) return null

    let cur = head
    let pre = null
    while (cur && cur.val !== left) {
        pre = cur
        cur = cur.next
    }
    let middleLink = reverseLink(cur, right)
    pre.next = middleLink

    return head
}

function reverseLink(head, right) {
    if (!head) return null
    let cur = head,
        next = head,
        pre = null
    while (cur && cur.val !== right) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = cur.next
    }

    // if (cur) {
    //     // next cur
    //     head.next = cur
    // }
    return pre
}
// @lc code=end
