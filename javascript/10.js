const primes = function * () {
  const xs = []
  let x = 2
  while (true) {
    if (xs.every(y => x % y !== 0)) {
      xs.push(x)
      yield x
    }
    x++
  }
}
let sum = 0
for (const x of primes()) if (x >= 2000000) break; else sum += x
console.log(sum)
