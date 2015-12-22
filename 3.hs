main = putStrLn . show $ largestPrimeFactor 600851475143

largestPrimeFactor n = if m == n then m else largestPrimeFactor (div n m)
  where m = smallestPrimeFactor n

smallestPrimeFactor n = head $ filter ((== 0) . mod n) [2..n]
