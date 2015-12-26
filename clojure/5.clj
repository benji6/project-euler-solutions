(defn gcd [a, b]
  (if (= b 0) a (gcd b (mod a b))))
(defn lcm [a, b]
  (/ (* a b) (gcd a b)))
(println (reduce lcm (range 1 21)))
