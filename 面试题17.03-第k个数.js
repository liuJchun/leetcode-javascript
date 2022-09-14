// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

// 示例 1:

// 输入: k = 5

// 输出: 9

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/get-kth-magic-number-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var getKthMagicNumber = function (k) {
    const dp = [1]
    let p3 = 0
    p5 = 0
    p7 = 0
    for (let i = 1; i < k; i++) {
        const v3 = dp[p3] * 3,
            v5 = dp[p5] * 5,
            v7 = dp[p7] * 7
        dp[i] = Math.min(v3, v5, v7)
        if (dp[i] === v3) p3++
        if (dp[i] === v5) p5++
        if (dp[i] === v7) p7++
    }
    return dp[k - 1]
}
