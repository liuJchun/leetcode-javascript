/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 *
 * https://leetcode.cn/problems/super-ugly-number/description/
 *
 * algorithms
 * Medium (58.69%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    52.5K
 * Total Submissions: 89.7K
 * Testcase Example:  '12\n[2,7,13,19]'
 *
 * 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。
 *
 * 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。
 *
 * 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 12, primes = [2,7,13,19]
 * 输出：32
 * 解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12
 * 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
 *
 * 示例 2：
 *
 *
 * 输入：n = 1, primes = [2,3,5]
 * 输出：1
 * 解释：1 不含质因数，因此它的所有质因数都在质数数组 primes = [2,3,5] 中。
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 10^5
 * 1 <= primes.length <= 100
 * 2 <= primes[i] <= 1000
 * 题目数据 保证 primes[i] 是一个质数
 * primes 中的所有值都 互不相同 ，且按 递增顺序 排列
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    // 记录 primes 计算的次数，与 dp 索引对应
    const countMap = new Map(primes.map(el => [el, 0]))
    const dp = [1]

    for (let i = 1; i < n; i++) {
        // 存在 primes 对应可能出现的值
        let minMap = new Map()
        for (const item of primes) {
            const countIndex = countMap.get(item)
            const val = dp[countIndex] * item
            minMap.set(item, val)
        }

        // 当前可能的最小值
        const minVal = Math.min(...minMap.values())

        // 计数对应dp的索引，最小值对应的索引往后移动一位
        minMap.forEach((value, key, map) => {
            if (value === minVal) {
                countMap.set(key, countMap.get(key) + 1)
            }
        })
        dp[i] = minVal
    }
    return dp[n - 1]
}

// var nthSuperUglyNumber = function(n, primes) {
//     const countArr = new Array(primes.length).fill(0)
//     const dp = [1]
//     for(let i = 1 ; i < n; i++){
//         const valArr = primes.map((prime,index) => dp[countArr[index]] * prime)
//         const minVal = Math.min(...valArr)
//         for(let j = 0; j < valArr.length; j++) {
//             if(minVal === valArr[j]){
//                 countArr[j]++
//             }
//         }
//         dp[i] = minVal
//     }
//     return dp[n -1]
// };
// @lc code=end
