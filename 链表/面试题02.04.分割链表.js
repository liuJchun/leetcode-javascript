var partition = function (head, x) {
    let leftNode = (leftHead = new ListNode(null, null))
    let rightNode = (rightHead = new ListNode(null, null))
    let cur = head
    while (cur) {
        if (cur.val < x) {
            leftNode.next = new ListNode(cur.val, null)
            leftNode = leftNode.next
        } else {
            rightNode.next = new ListNode(cur.val, null)
            rightNode = rightNode.next
        }
        cur = cur.next
    }
    leftNode.next = rightHead.next
    return leftHead.next
}
