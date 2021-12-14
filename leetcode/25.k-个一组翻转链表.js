/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) return null
    let ret = (pre = new ListNode(-1, head))
    while (pre) {
        pre.next = reverseLink(pre.next, k)

        for (let i = 0; i < k && pre; i++) {
            pre = pre.next
        }
        if (!pre) break
    }
    return ret.next
}
function reverseLink(head, k) {
    if (!head) return null
    let pre = new ListNode(-1, head),
        cur = head
    for (let i = 0; i < k && pre; i++) {
        pre = pre.next
    }
    // null 标识已完毕
    if (!pre) return head
    pre = null
    // 开始反转
    while (cur && k--) {
        ;[cur.next, pre, cur] = [pre, cur, cur.next]
    }
    head.next = cur
    return pre
}
// 方案二
// var reverseKGroup = function (head, k) {
//     if (!head) return null
//     let index = 0,
//         eachHead = (ret = pre = new ListNode(-1, head))
//     while (pre) {
//         index++
//         pre = pre.next
//         if (!pre) break

//         if (index % k === 0) {
//             let { head, end } = reverseLink(eachHead.next, k)
//             eachHead.next = head
//             eachHead = pre = end
//         }
//     }
//     return ret.next
// }
// function reverseLink(head, k) {
//     if (!head) return null
//     let pre = null,
//         cur = head
//     while (cur && k--) {
//         ;[cur.next, pre, cur] = [pre, cur, cur.next]
//     }
//     head.next = cur
//     return { head: pre, end: head }
// }
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseKGroup
// @after-stub-for-debug-end
