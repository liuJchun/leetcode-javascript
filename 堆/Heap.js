/**
 * 数据结构：堆
 * 1、若父节点编号为x，则子节点编号分别为2x，2x+1（完全二叉树）
 * 2、任意一个节点都小于它的子节点们，即堆序性
 */
class Heap {
    constructor(data) {
        this.data = data
        this.compartor = (a, b) => a - b
        this.heapify(data)
    }

    size() {
        return this.data.length
    }

    heapify(data) {
        if (this.size() < 2) {
            return
        }
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }

    // 向上调整
    bubbleUp(index) {
        while (index) {
            const parentIndex = (index - 1) >> 1
            if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex)
            }
            index = parentIndex
        }
    }

    swap(i, j) {
        if (i === j) return
        ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }

    // 向下调整
    bubbleDown(index) {
        let lastIndex = this.size() - 1
        while (index < lastIndex) {
            const leftIndex = 2 * index + 1
            const rightIndex = 2 * index + 2
            let findIndex = index
            if (
                leftIndex <= lastIndex &&
                this.compartor(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex
            }
            if (
                rightIndex <= lastIndex &&
                this.compartor(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex
            }
            if (findIndex !== index) {
                this.swap(index, findIndex)
                index = findIndex
            } else {
                // over
                break
            }
        }
    }

    // 添加
    offer(val) {
        this.data.push(val)
        this.bubbleUp(this.size() - 1)
    }

    // 输出
    popll() {
        if (this.size() === 0) return null
        const res = this.data[0]
        this.data[0] = this.data.pop()
        // 调整
        if (this.size()) {
            this.bubbleDown(0)
        }
        return res
    }

    // 查看顶部元素
    peek() {
        if (this.size() == 0) return null
        return this.data.length[0]
    }
}

let arr = [9, 2, 5, 3, 4, 2, 2, 7, 1]
let minHeap = new Heap(arr)
console.log(minHeap.popll())
console.log(minHeap)
