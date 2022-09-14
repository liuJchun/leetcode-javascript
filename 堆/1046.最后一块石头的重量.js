/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxHeap = new MaxHeap(stones)
    while (maxHeap.getSize() > 1) {
        const stone1 = maxHeap.pop()
        const stone2 = maxHeap.pop()
        if (stone1 !== stone2) {
            maxHeap.insert(stone1 - stone2)
        }
    }
    return maxHeap.getSize() > 0 ? maxHeap.pop() : 0
}

class MaxHeap {
    constructor(data) {
        this.data = data
        this.build()
    }

    build() {
        if (this.getSize() < 2) {
            return
        }
        for (let i = 1; i < this.getSize(); i++) {
            this.bubbleUp(i)
        }
    }

    bubbleUp(index) {
        while (index > 0) {
            const pIndex = (index - 1) >> 1
            if (this.data[pIndex] < this.data[index]) {
                this.swap(pIndex, index)
                index = pIndex
            } else {
                break
            }
        }
    }

    getSize() {
        return this.data.length
    }

    insert(val) {
        this.data.push(val)
        this.bubbleUp(this.getSize() - 1)
    }

    swap(i, j) {
        if (i === j) return
        const temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }

    pop() {
        if (this.getSize() === 0) return
        if (this.getSize() < 2) {
            return this.data.pop()
        }
        const val = this.data[0]
        this.data[0] = this.data.pop()

        let index = 0
        while (index < this.getSize()) {
            const leftIndex = 2 * index + 1
            const rightIndex = 2 * index + 2
            let swapIndex = index

            if (leftIndex < this.getSize() && this.data[leftIndex] > this.data[swapIndex]) {
                swapIndex = leftIndex
            }

            if (rightIndex < this.getSize() && this.data[rightIndex] > this.data[swapIndex]) {
                swapIndex = rightIndex
            }
            if (index !== swapIndex) {
                this.swap(index, swapIndex)
                index = swapIndex
            } else {
                break
            }
        }
        return val
    }
}
// @lc code=end
