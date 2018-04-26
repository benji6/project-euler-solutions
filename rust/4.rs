fn reverse_string (s: &String) -> String {
  s.chars().rev().collect::<String>()
}

fn is_palindrome (n: u32) -> bool {
  let s = n.to_string();
  s == reverse_string(&s)
}

fn main () {
  let mut largest_palindrome = 0;
  for i in 1..1000 {
    for j in 1..1000 {
      let k = i * j;
      if is_palindrome(k) && k > largest_palindrome {
        largest_palindrome = k;
      }
    }
  }
  println!("{}", largest_palindrome);
}
