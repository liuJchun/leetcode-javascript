/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2 || null
    }
    let count = 0,
        ret = (pre = new ListNode(null, null))
    while (l1 || l2 || count) {
        let val1 = l1?.val || 0
        let val2 = l2?.val || 0
        let sum = val1 + val2 + count
        count = Math.floor(sum / 10)
        pre.next = new ListNode(sum % 10, null)
        pre = pre.next
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    return ret.next
}
// var addTwoNumbers = function (l1, l2) {
//     let sum = getLinkSum(l1) + getLinkSum(l2)
//     let cur = null,
//         head = null,
//         next = null
//     do {
//         if (head) {
//             cur = next
//         } else {
//             cur = head = new ListNode(sum % 10)
//         }

//         sum = Math.floor(sum / 10)
//         if (sum) {
//             cur.next = new ListNode(sum % 10)
//         } else {
//             cur.next = null
//         }
//         next = cur.next
//     } while (next)
//     return head
// }

// function getLinkSum(l) {
//     if (!l) return 0
//     let i = 0,
//         res = 0,
//         cur = l

//     while (cur) {
//         res += cur.val * 10 ** i
//         cur = cur.next
//         i++
//     }
//     return res
// }
// @lc code=end
