/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null
    let cur = head,
        res = new Node(null, null, null),
        pre = res
    const cacheIndexNode = {}

    for (let i = 0; cur; cur = cur.next, pre = pre.next, i++) {
        cur.id = i
        pre.next = new Node(cur.val, null, cur.random)
        cacheIndexNode[cur.id] = pre.next
    }

    pre = res.next
    while (pre) {
        pre.random = pre.random ? cacheIndexNode[pre.random.id] : null
        pre = pre.next
    }
    return res.next
}
// @lc code=end
