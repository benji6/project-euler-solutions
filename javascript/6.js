const sumOfSquares = n => {
  let x = 0
  while (n) x += Math.pow(n--, 2)
  return x
}
const squareOfSums = n => {
  let x = 0
  while (n) x += n--
  return Math.pow(x, 2)
}
const diffSumOfSquaresAndSquareOfSums = n => squareOfSums(n) - sumOfSquares(n)
console.log(diffSumOfSquaresAndSquareOfSums(100))
