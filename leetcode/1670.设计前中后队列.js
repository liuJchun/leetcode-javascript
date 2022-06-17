/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

function NodeList(val = null, next = null, last = null) {
    this.val = val
    this.next = next
    this.last = last
}

var FrontMiddleBackQueue = function () {
    // 头指针 next
    this.head = new NodeList(-1, null, null)
    this.count = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
    this.head.next = new NodeList(val, this.head.next, this.head)
    this.count++
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    const middle = Math.floor(this.count / 2)
    const res = this.head.next
    while (middle--) {
        res = res.next
    }
    res.next = new NodeList(val, res.next)
    this.count++
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
    const end = this.head.next
    while (end && end.next) {
        end = end.next
    }
    end.next = new NodeList(val, null)
    this.count++
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
    if (this.isEmpty()) return -1
    const deleteNode = this.head.next
    this.head = deleteNode.next
    this.count--
    return this.deleteNode.val
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
    if (this.isEmpty()) return -1
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
    if (this.isEmpty()) return -1
}

FrontMiddleBackQueue.prototype.isEmpty = function () {
    return this.count === 0
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end
