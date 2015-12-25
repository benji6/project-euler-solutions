main = putStrLn . show $ sum $ takeWhile (< 2000000) primes

primes = sieve [2..]
  where sieve (p:xs) = p : sieve [x | x <- xs, mod x p > 0]
