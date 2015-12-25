main = putStrLn . show $ primes !! 1000
primes = sieve [2..]
  where sieve (p:xs) = p : sieve [x | x <- xs, mod x p > 0]
