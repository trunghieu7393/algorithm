// fibo: 0 1 1 2 3 5 8 14 32...

// requirement:
// input 12
// output number

const memo = {}

const fibo = (n) => {
  if (n <= 1) return n // 0, 1
  if (memo[n]) return memo[n]

  memo[n] = fibo(n-1) + fibo(n-2)
  return memo[n]
}

// 0 1 1 2 3 5 8 14 32...
console.log(fibo(6));
console.log(fibo(100));
