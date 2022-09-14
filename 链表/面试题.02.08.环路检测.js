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
    let fastNode = (slowNode = head)
    while (fastNode) {
        slowNode = slowNode.next
        if (fastNode.next) {
            fastNode = fastNode.next && fastNode.next.next
        } else {
            return null
        }
        // 相遇
        if (slowNode === fastNode) {
            let ptr = head
            while (ptr !== slowNode) {
                ptr = ptr.next
                slowNode = slowNode.next
            }
            return ptr
        }
    }
    return null
}
