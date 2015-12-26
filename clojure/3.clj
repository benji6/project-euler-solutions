(defn smallest-prime-factor [n]
  (first (filter #(= 0 (mod n %)) (range 2 (+ n 1)))))
(defn largest-prime-factor [n]
  (let [m (smallest-prime-factor n)]
  (if (= m n) m
      (largest-prime-factor (/ n m)))))
(println (largest-prime-factor 600851475143))
