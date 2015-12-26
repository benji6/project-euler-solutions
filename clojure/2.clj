(defn fib []
  (map first (iterate (fn [[a b]] [b (+ a b)]) [0 1])))
(println (reduce + (take-while #(< % 4000000) (filter #(= 0 (mod % 2)) (fib)))))
