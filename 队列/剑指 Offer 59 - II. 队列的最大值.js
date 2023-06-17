var MaxQueue = function () {
  this.queue = []
  this.maxDQueue = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.isEmpty(this.maxDQueue)) {
    return -1
  }
  return this.maxDQueue[0]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  while (!this.isEmpty(this.maxDQueue) && value > this.maxDQueue[this.maxDQueue.length - 1]) {
    this.maxDQueue.pop()
  }
  this.maxDQueue.push(value)
  return value
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.isEmpty(this.queue)) {
    return -1
  }
  const topQ = this.queue.shift()
  if (topQ === this.maxDQueue[0]) {
    this.maxDQueue.shift()
  }
  return topQ
}

MaxQueue.prototype.isEmpty = function (queue) {
  const tar = queue ? queue : this.queue
  return tar.length === 0
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
