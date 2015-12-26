const pythagoreanTriplets = function * () {
  for (var a = 1; a < 998; a++) {
    for (var b = 1; b < 999 - a; b++) {
      const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
      if (Math.pow(Math.round(c), 2) === Math.pow(a, 2) + Math.pow(b, 2)) yield [a, b, c]
    }
  }
}
for (const x of pythagoreanTriplets()) {
  if (x.reduce((a, b) => a + b) === 1000) {
    console.log(x.reduce((a, b) => a * b))
    break
  }
}
