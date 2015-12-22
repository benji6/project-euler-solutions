main = putStrLn . show $ squareOfSumsLessSumOfSquares [1..100]
squareOfSumsLessSumOfSquares xs = squareOfSums xs - sumOfSquares xs
sumOfSquares = sum . map (^ 2)
squareOfSums = (^ 2) . sum
