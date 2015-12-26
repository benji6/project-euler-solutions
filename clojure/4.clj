(defn is-palindrome? [n]
  (= (str n) (apply str (reverse (str n)))))
(println (apply max (for [x (range 100 999) y (range 100 999)
                          :let [z (* x y)]
                          :when (and (>= y x) (is-palindrome? z))] z)))
