/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  // 入栈
  this.stack1 = []

  this.stack2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}

MyQueue.prototype.checkStack = function () {
  if (!this.empty() && !this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.empty()) {
    this.checkStack()
    return this.stack2.pop()
  }
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.empty()) {
    this.checkStack()
    return this.stack2[this.stack2.length - 1]
  }
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stack2.length || this.stack1.length) {
    return false
  }
  return true
}
