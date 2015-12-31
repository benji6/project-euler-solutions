import Data.List (find)

main = putStrLn . show $ fmap last $ find ((> 500) . length) $ map factors $ triangleNumbers
triangleNumbers = scanl1 (+) [1..]
factors n = filter (isFactor n) [1..n]
isFactor a b = mod a b == 0
