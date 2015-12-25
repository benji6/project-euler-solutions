console.log(Array
  .from({length: 999}, (_, i) => i + 1)
  .filter(x => x % 3 === 0 || x % 5 === 0)
  .reduce((a, b) => a + b))
