/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const getOpLevel = str => {
  switch (str) {
    case '+':
    case '-':
      return 1
    case '*':
    case '/':
      return 2
    case '@':
      return -1
  }
  return 0
}

const calc = (a, op, b) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return (a / b) | 0
  }
  return 0
}

var calculate = function (s) {
  s += '@'
  let numStack = []
  let opStack = []
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    // if (getOpLevel(s[i]) === 0) {
    //   sum = sum * 10 + (s[i] - '0')
    //   continue
    // }
    // numStack.push(sum)
    // sum = 0
    // while (opStack.length > 0 && getOpLevel(s[i]) <= getOpLevel(opStack[opStack.length - 1])) {
    //   const a = numStack.pop()
    //   const b = numStack.pop()
    //   const curOp = opStack.pop()
    //   // clac value
    //   numStack.push(calc(b, curOp, a))
    // }
    // opStack.push(s[i])

    if (s[i] < '0' || s[i] > '9') {
      numStack.push(sum)
      sum = 0
      // 计算栈中优先级高的数据，弹出数据栈，和运算栈
      while (opStack.length > 0 && getOpLevel(s[i]) <= getOpLevel(opStack[opStack.length - 1])) {
        const a = numStack.pop()
        const b = numStack.pop()
        const curOp = opStack.pop()
        // clac value
        numStack.push(calc(b, curOp, a))
      }
      opStack.push(s[i])
      continue
    }
    sum = sum * 10 + (s[i] - '0')
  }
  return numStack[numStack.length - 1]
}

// console.log(calculate('3+2*2'))
// @lc code=end
