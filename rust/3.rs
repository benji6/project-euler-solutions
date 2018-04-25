fn smallest_prime_factor(n: u64) -> u64 {
  let mut prime_factor = 2;
  while n % prime_factor != 0 {
    prime_factor += 1;
  }
  prime_factor
}

fn largest_prime_factor(n: u64) -> u64 {
  let m = smallest_prime_factor(n);
  if m == n {
    m
  } else {
    largest_prime_factor(n / m)
  }
}

fn main () {
  println!("{}", largest_prime_factor(600851475143));
}
