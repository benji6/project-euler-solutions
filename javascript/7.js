const primes = function * () {
  const xs = []
  let x = 2
  while (xs.length < 10001) {
    if (xs.every(y => x % y !== 0)) {
      xs.push(x)
      yield x
    }
    x++
  }
}
console.log([...primes()].pop())
