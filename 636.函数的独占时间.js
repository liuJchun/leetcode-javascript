/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const stack = []
    const res = []

    for (const log of logs) {
        const [id, status, time] = log.split(":")
        if (status === "start") {
            stack.push({
                id: id,
                time: time,
            })
            const durTime = time - stack[stack.length - 1].time
            res[id] = durTime || 0
        }

        if (status === "end") {
            let durTime = time - stack.pop().time

            while (stack.length > 0 && stack[stack.length - 1]?.id === id) {
                const lastStackItem = stack.pop()
                durTime = time - lastStackItem.time
            }
            res.unshift(durTime)
        }
    }

    return res
}
