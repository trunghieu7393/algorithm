const isPalindrome = (s) => {
  if (s.length <= 1) return false

  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversed = cleaned.split('').reverse().join('')

  return cleaned === reversed
}