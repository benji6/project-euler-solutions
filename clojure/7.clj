(def prime-gen
  (let [primes (atom [])]
    (for [n (iterate inc 2)
            :when (not-any? #(zero? (mod n %))
                            (filter #(<= % (Math/sqrt n)) @primes))]
         (do (swap! primes conj n) n))))

(println (nth prime-gen 10000))
