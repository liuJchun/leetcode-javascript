/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.73%)
 * Likes:    2004
 * Dislikes: 0
 * Total Accepted:    754.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：l1 = [], l2 = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 两个链表的节点数目范围是 [0, 50]
 * -100
 * l1 和 l2 均按 非递减顺序 排列
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2 || null
    }
    let ret = (pre = new ListNode(-1, l1))
    while (pre) {
        // 插入
        let next = pre.next
        if (l2 && next && next.val > l2.val) {
            // let l2Next = l2.next
            // pre.next = l2
            // l2.next = next
            // l2 = l2Next
            ;[pre.next, l2.next, l2] = [l2, pre.next, l2.next]
        }
        // l2如果还有剩余
        if (!next) {
            pre.next = l2
            break
        }
        pre = pre.next
    }

    return ret.next
}

// @lc code=end
