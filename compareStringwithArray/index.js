// input s: 'hieult'
// input arr: ['h','e','t', 'i' ,'l','u']

word = 'hieu@Lt'
testcase1 = ['h', 'i', 'e', 'u', '@', 'L', 't']
testcase2 = ['h', 'i', 'e', 'u', '@', 'l', 't']
testcase3 = ['h', 'i', 'u', 'e', '@', 'L', 't']
testcase4 = ['h', 'i', 'u', 'e', '@', 'L', 't', '']
testcase5 = ['h', 'i', 'u', 'e', '@', 'Lt']

const isVaild = (word, characters) => {
  if (word.length !== characters.length) return false

  const wordCounter = {}
  for (c of word) {
    wordCounter[c] = (wordCounter[c] || 0) + 1
  }

  for (c of characters) {
    if (wordCounter[c]) {
      wordCounter[c] -= 1
    } else {
      return false
    }
  }

  return true
}

console.log('testcase 1: ', isVaild(word, testcase1));
console.log('testcase 2: ', isVaild(word, testcase2));
console.log('testcase 3: ', isVaild(word, testcase3));
console.log('testcase 4: ', isVaild(word, testcase4));
console.log('testcase 5: ', isVaild(word, testcase5));
