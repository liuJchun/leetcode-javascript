/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    if (head === null) return new Array(k).fill(null)

    let len = 0
    let cur = head
    while (cur) {
        len++
        cur = cur.next
    }

    // 分配长度
    let lenArr = new Array(k)
    lenArr.fill((len / k) | 0)
    for (let i = 0; i < len % k; i++) {
        lenArr[i]++
    }
    // 生成返回的 node arr
    let res = new Array(k).fill(null)
    cur = new ListNode(null, head)
    // 每次循环的头节点
    let curItemHead = new ListNode(null, head)
    for (let i = 0; i < k; i++) {
        let node = curItemHead
        // 每个node 的数量
        let num = lenArr[i]
        while (node && num && num--) {
            node = node && node.next
        }

        // res[i] = (curItemHead && curItemHead.next) || null
        // let next = node && node.next
        // if (node) {
        //     node.next = null
        // }
        // curItemHead.next = next
        if (node) {
            const next = new ListNode(null, node.next)
            node.next = null
            res[i] = curItemHead.next
            curItemHead = next
        } else {
            res[i] = null
        }
    }
    console.log(res)

    return res
}
// @lc code=end
