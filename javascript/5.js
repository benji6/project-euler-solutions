const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
const lcm = (a, b) => a * b / gcd(a, b)
console.log(Array.from({length: 9}, (_, i) => i + 1)
  .reduce((val, acc) => lcm(val, acc)))
