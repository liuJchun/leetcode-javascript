/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function () {
    this.userMap = new Map()
}

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.userMap.has(userId)) {
        this.userMap.set(userId, new User(userId))
    }
    const user = this.userMap.get(userId)
    user.postTweet(tweetId)
}

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    if (!this.userMap.has(userId)) return []

    const user = this.userMap.get(userId)
    const followedIds = user.followed
    // 当前用户关注列表中的 tweet
    let curUserWithTweets = []
    for (const id of followedIds) {
        curUserWithTweets = curUserWithTweets.concat(this.userMap.get(id).tweets)
    }
    // 使用Heap
    const heap = new Heap(curUserWithTweets, (v1, v2) => v2.time - v1.time)

    const res = []
    while (res.length < 10 && heap.size() > 0) {
        res.push(heap.delete())
    }
    // console.log(res)
    // console.log("===curUserWithTweets :", curUserWithTweets, res)
    return res.map(el => el.tweetId)
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.userMap.has(followerId)) {
        this.userMap.set(followerId, new User(followerId))
    }

    if (!this.userMap.has(followeeId)) {
        this.userMap.set(followeeId, new User(followeeId))
    }

    const user = this.userMap.get(followerId)
    user.follow(followeeId)
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.userMap.has(followerId)) {
        return
    }
    const user = this.userMap.get(followerId)
    user.unfollow(followeeId)
}

class User {
    constructor(userId) {
        this.id = userId
        this.followed = new Set()
        // 发送的推文
        this.tweets = []
        this.follow(userId)
    }

    follow(userId) {
        this.followed.add(userId)
    }

    unfollow(userId) {
        if (userId === this.id) return
        this.followed.delete(userId)
    }

    postTweet(tweetId) {
        const tweet = new Tweet(tweetId)
        this.tweets.unshift(tweet)
    }
}

let timeStamp = 0
// tweet 内容对象
class Tweet {
    constructor(tweetId) {
        this.tweetId = tweetId
        this.time = ++timeStamp
    }
}

class Heap {
    constructor(data, compartor) {
        this.compartor = compartor || ((a, b) => a - b)
        this.data = data
        this.build(this.data)
    }

    build(data) {
        if (data.length < 2) {
            return
        }
        for (let i = 1; i < data.length; i++) {
            // 向上调整， 保证堆序性
            let index = i
            while (index > 0) {
                const parentIndex = (i - 1) >> 1
                // 向上整理
                if (this.compartor(this.data[parentIndex], this.data[index]) > 0) {
                    this.swap(index, parentIndex)
                    index = parentIndex
                } else {
                    break
                }
            }
        }
    }

    swap(i, j) {
        if (i === j) return
        ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }

    size() {
        return this.data.length
    }

    delete() {
        if (this.size() === 0) return
        if (this.size() === 1) {
            return this.data.pop()
        }
        const val = this.data[0]
        this.data[0] = this.data.pop()

        let index = 0

        // 向下调整， 保证堆序性
        while (index < this.size() - 1 && this.size() > 0) {
            let left = 2 * index + 1
            let right = 2 * index + 2
            let swapIndex = left

            // 可能 交换位置的 index
            if (right <= this.size() - 1) {
                swapIndex = this.compartor(this.data[left], this.data[right]) > 0 ? right : left
            }

            if (
                swapIndex < this.size() - 1 &&
                this.compartor(this.data[index], this.data[swapIndex]) > 0
            ) {
                this.swap(swapIndex, index)
                index = swapIndex
            } else {
                break
            }
        }
        return val
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
