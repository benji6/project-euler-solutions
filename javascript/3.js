const smallestPrimeFactor = n => {
  for (let x = 2; ; x++) if (!(n % x)) return x
}
const largestPrimeFactor = n => {
  const m = smallestPrimeFactor(n)
  return n === m ? n : largestPrimeFactor(n / m)
}
console.log(largestPrimeFactor(600851475143))
