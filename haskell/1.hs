main = putStrLn . show $ sum [a | a <- [0..999], (mod a 3 == 0 || mod a 5 == 0)]
