/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    const reverse = (arr, k) => {
        return [...arr.slice(0, k).reverse(), ...arr.slice(k)]
    }
    let res = [],
        len = arr.length

    while (len) {
        const lenArr = arr.slice(0, len)
        let max = Math.max(...lenArr)
        let index = lenArr.indexOf(max)

        if (len - 1 !== index) {
            if (index !== 0) {
                arr = reverse(arr, index + 1)
                res.push(index + 1)
            }
            arr = reverse(arr, len)
            res.push(len)
        }
        len--
    }
    return res
}
// @lc code=end
