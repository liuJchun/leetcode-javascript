/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k <= 1) {
    return nums
  }

  const res = []
  const maxDQueue = []

  // 初始化一个 k 长度的单调递减队列
  for (let i = 0; i < k; i++) {
    const item = nums[i]
    while (maxDQueue.length > 0 && item > maxDQueue[maxDQueue.length - 1]) {
      maxDQueue.pop()
    }
    maxDQueue.push(item)
  }
  
  for (let i = 0; i < nums.length - k; i++) {
    const item = nums[i]
    res.push(maxDQueue[0])
    if (item === maxDQueue[0]) {
      maxDQueue.shift()
    }

    const dqPushVal = nums[i + k]
    while (maxDQueue.length > 0 && dqPushVal > maxDQueue[maxDQueue.length - 1]) {
      maxDQueue.pop()
    }
    maxDQueue.push(dqPushVal)
  }

  res.push(maxDQueue[0])

  return res
}
// @lc code=end
