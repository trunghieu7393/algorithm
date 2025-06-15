// requirment
// ()[]{}
// ([]{}{}())

// input '()[]{}'
// loop char

//loop 1: ( => push stack
// stack only ( [ {
/*
(
*/

//loop 2: ) => stack pop() !== char

// loop n
// vaild when stack empty

// (([]{}))
const isVaild = (s) => {
  if (!s.length || s.length % 2 !== 0 ) return false

  const stack = []

  for (char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    }
    else {
      if (char === ')') {
        if (stack.pop() !== '(') return false
      }
      else if (char === ']') {
        if (stack.pop() !== '[') return false
      }
      else if (char === '}') {
        if (stack.pop() !== '{') return false
      }
    }
  }
  return stack.length === 0
}

console.log(isVaild('()[]{}'));
console.log(isVaild('(()[]{}'));
console.log(isVaild('({[{()}]})'));
