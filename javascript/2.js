const fibonacciGenerator = function * () {
  let [a, b] = [1, 1]
  while (true) yield ([a, b] = [b, a + b])[0]
}
let sumEvenFibs = 0
for (const x of fibonacciGenerator()) {
  if (x > 4000000) break
  if (x % 2 === 0) sumEvenFibs += x
}
console.log(sumEvenFibs)
