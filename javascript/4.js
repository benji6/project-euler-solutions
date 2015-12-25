const isPalindrome = n => n.toString() ===
  n.toString().split('').reverse().join('')
const xs = Array.from({length: 999}, (_, i) => i + 1)
let greatestPalindromicProduct = 0
for (const x of xs) for (const y of xs) {
  const product = x * y
  if (isPalindrome(product) && product > greatestPalindromicProduct) {
    greatestPalindromicProduct = product
  }
}
console.log(greatestPalindromicProduct)
