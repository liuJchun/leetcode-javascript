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
    if (!head || left === right) {
        return head || null
    }
    if (left === 1) {
        return reverserLink(head, left, right)
    }
    let pre = null,
        cur = head,
        index = 0
    while (cur && cur.next) {
        if (++index === left) {
            pre.next = reverserLink(cur, index, right)
            break
        }
        pre = cur
        cur = cur.next
    }
    return head
}

function reverserLink(head, curIndex, right) {
    // body
    if (!head) {
        return null
    }
    let pre = null,
        cur = head,
        next = null
    while (cur) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
        if (curIndex === right) {
            head.next = cur || null
            break
        }
        curIndex++
        // if (pre && pre.val === right) break
    }
    return pre
}

// 方案二
// var reverseBetween = function (head, left, right) {
//     if (!head) {
//         return null
//     }
//     let ret = (pre = new ListNode(-1, head)),
//         count = right - left + 1
//     while (--left) {
//         pre = pre.next
//     }
//     pre.next = reverseLink(pre.next, count)
//     return ret.next
// }

// function reverseLink(head, n) {
//     let pre = null,
//         cur = head

//     while (n--) {
//         // [cur, pre, cur.next] = [cur.next, cur, pre]
//         ;[cur.next, pre, cur] = [pre, cur, cur.next]
//     }
//     head.next = cur
//     return pre
// }
// @lc code=end
