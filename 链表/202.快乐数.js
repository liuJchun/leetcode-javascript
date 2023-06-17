/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

function getNextVal(val) {
  let sum = 0
  while (val) {
    sum += Math.pow(val % 10, 2)
    val = Math.floor(val / 10)
  }
  return sum
}

var isHappy = function (n) {
  let slow = (fast = n)
  while (fast !== 1) {
    slow = getNextVal(slow)
    fast = getNextVal(getNextVal(fast))
    if (slow === fast && slow !== 1) {
      return false
    }
  }
  return true
}
// @lc code=end
