main = putStrLn . show $ sum $ filter even $ takeWhile (<= 4000000) fib
fib = 1 : 2 : (zipWith (+) fib (tail fib))
