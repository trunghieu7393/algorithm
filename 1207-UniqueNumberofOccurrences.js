// kiem tra tan suat duy nhat
// arr = [1,2,2,1,1,3] => true
// tan suat xuat hien:
// 1: 3
// 2: 2
// 3: 1

// arr = [1,2] => false
// tan suat xuat hien:
// 1: 1
// 2: 1

// arr = [-1,-3] => false
// arr = [-1, -2, -2, -1, -3, -1] => true

const uniqueOccurrences = (arr) => {
  const counter = {}

  for (const num of arr) {
    counter[num] = (counter[num] || 0) + 1
  }

  const val = Object.values(counter)
  const uniqueVal = new Set(val)

  return val.length === uniqueVal.size
}

console.log('case 1: [1,2,2,1,1,3]', uniqueOccurrences([1,2,2,1,1,3]))
console.log('case 2: [1,2]', uniqueOccurrences([1,2]))
console.log('case 3: [-1, -2, -2, -1, -3, -1]', uniqueOccurrences([-1, -2, -2, -1, -3, -1]))