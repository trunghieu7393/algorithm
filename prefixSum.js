// nums = [1, 2, 3, 4, 5]
// output = [1,3,6,10,15]

const prefixSum = (arr) => {
  const newArr = []
  newArr[0] = arr[0]
  

  for (let i = 1; i < arr.length; i++) {
    newArr[i] = newArr[i - 1] + arr[i]
  }

  return newArr
}

console.log('case 1: [1, 2, 3, 4, 5]', prefixSum([1, 2, 3, 4, 5]));
