/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */

// https://zhuanlan.zhihu.com/p/344733609
var longestWPI = function (hours) {
  // // 1/-1数组，前缀和数组求和
  // const record = []
  // for (let i = 0; i < hours.length; i++) {
  //   const hour = hours[i]
  //   if (hour > 8) {
  //     record.push(1)
  //   } else {
  //     record.push(-1)
  //   }
  // }
  // //生成前缀和数组
  // const preSuffixSum = [0]
  // for (let i = 0; i < record.length; i++) {
  //   preSuffixSum[i + 1] = record[i] + preSuffixSum[i]
  // }

  // 记录出现的位置
  let ind = { 0: -1 }
  // 统计次数
  let f = { 0: 0 }
  let count = 0,
    ans = 0
  
  for (let i = 0; i < hours.length; i++) {
    const hour = hours[i]
    if (hour > 8) {
      count++
    } else {
      count--
    }
    // 记录第一次出现的位置
    if (ind[count] === undefined) {
      ind[count] = i
      if (ind[count - 1] === undefined) {
        f[count] = 0
      } else {
        f[count] = f[count - 1] + (i - ind[count - 1])
      }
    }
    if (f[count - 1] === undefined) {
      continue
    }
    ans = Math.max(ans, f[count - 1] + i - ind[count - 1])
  }
  return ans
}
// @lc code=end
