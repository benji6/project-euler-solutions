main = putStrLn . show $ largestPalindrome 3
largestPalindrome n = foldl1 max [a * b | a <- nDigitNumbers n, b <- nDigitNumbers n, isPalindrome $ a * b]
isPalindrome n = show n == reverse (show n)
nDigitNumbers n = [0..10 ^ n - 1]
