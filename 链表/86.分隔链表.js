/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return null
    let bigLink = new ListNode(null, null),
        bigPre = bigLink
    let smallLink = new ListNode(null, null),
        smallPre = smallLink
    let cur = head
    while (cur) {
        if (cur.val >= x) {
            bigLink.next = new ListNode(cur.val, null)
            bigLink = bigLink.next
        } else {
            smallLink.next = new ListNode(cur.val, null)
            smallLink = smallLink.next
        }
        cur = cur.next
    }
    smallLink.next = bigPre.next

    return smallPre.next
}
// @lc code=end
