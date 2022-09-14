/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var LinkNode = function (val, next, prev) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
    this.prev = prev === undefined ? null : prev
}

var MyLinkedList = function () {
    this.linknode = null
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.linknode === null) {
        return -1
    }
    let cur = this.linknode
    while (cur && index--) {
        cur = cur.next
        if (index === 0) {
            return cur
        }
    }
    return -1
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    
    this.linknode = new LinkNode(val, this.linknode)
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let cur = this.linknode
    if (cur === null) {
        this.linknode = new LinkNode(val, null)
    }
    while (cur && cur.next) {
        cur = cur.next
    }
    cur.next = new LinkNode(val, null)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    const preIndex = 0

    let pre = new LinkNode(null, this.linknode)

    while (pre && index--) {
        pre = pre.next
    }

    pre.next = new LinkNode(val, pre.next)
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.linknode === null) return

    let pre = new LinkNode(null, this.linknode)

    while (pre && index--) {
        pre = pre.next
        if (index === 0) {
            pre.next = pre.next && pre.next.next
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
