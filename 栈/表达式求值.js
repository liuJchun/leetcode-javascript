// 递归求解表达式
function calc(s, l, r) {
  if (typeof s !== 'string') {
    return 0
  }
  let minPri = 10000 - 1,
    temp = 0,
    // 当前运算符的优先级
    curPri = 0,
    // 最小优先级位置
    clacCharPos = -1

  for (let i = l; i <= r; i++) {
    curPri = 10000
    switch (s[i]) {
      case '+':
      case '-':
        curPri = temp + 1
        break
      case '*':
      case '/':
        curPri = temp + 2
        break
      case '(':
        temp += 100
        break
      case ')':
        temp -= 100
        break
      default:
        break
    }

    if (curPri <= minPri) {
      minPri = curPri
      clacCharPos = i
    }
  }

  if (clacCharPos === -1) {
    let sum = 0
    for (let i = l; i <= r; i++) {
      if (s[i] < '0' || s[i] > '9') continue
      sum = sum * 10 + (s[i] - '0')
    }
    return sum
  }

  console.log('find calc char index is:', clacCharPos, s[clacCharPos])

  const a = calc(s, l, clacCharPos - 1)
  const b = calc(s, clacCharPos + 1, r)
  switch (s[clacCharPos]) {
    case '+':
      return a + b
    case '-':
      return a + -b
    case '*':
      return a * b
    case '/':
      return a / b
  }
}

// const str = '1-1+1'
const str = '3+2*2'

console.log(calc(str, 0, str.length - 1))
