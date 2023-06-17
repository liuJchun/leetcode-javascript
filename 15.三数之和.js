/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortNums = nums.sort((a, b) => {
    return a - b
  })
  let ans = []
  for (let i = 0; i < sortNums.length; i++) {
    let headIndex = i + 1,
      endIndex = sortNums.length - 1
    if (sortNums[i] === sortNums[i - 1]) {
      continue
    }
    while (headIndex < endIndex) {
      const sum = sortNums[i] + sortNums[headIndex] + sortNums[endIndex]
      if (sum === 0) {
        ans.push([sortNums[i], sortNums[headIndex], sortNums[endIndex]])
        headIndex++
        endIndex--
      } else if (sum < 0) {
        headIndex++
      } else {
        endIndex--
      }

      while (sortNums[headIndex] === sortNums[headIndex - 1]) {
        headIndex++
      }
      while (sortNums[endIndex] === sortNums[endIndex + 1]) {
        endIndex--
      }
    }
  }
  return ans
}
// @lc code=end
