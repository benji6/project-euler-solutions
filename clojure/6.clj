(defn square [a] (* a a))
(def sum (partial reduce +))
(def sum-squares (comp sum (partial map square)))
(def square-sum (comp * square sum))
(defn diff-square-sum-and-sum-squares [xs]
  (- (square-sum xs) (sum-squares xs)))
(println (diff-square-sum-and-sum-squares (range 1 101)))
