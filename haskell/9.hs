main = putStrLn . show $ head [a * b * c | a <- [1..x], b <- [a..x - a], c <- [b..x - a - b], a + b + c == x && isTriplet a b c]
x = 1000
isTriplet a b c = a ^ 2 + b ^ 2 == c ^ 2
