fn get_next_fibs((n, m): (u32, u32)) -> (u32, u32) {
  (m, n + m)
}

fn main () {
  let mut current_fibs = (1, 1);
  let mut sum: u32 = 0;

  loop {
    current_fibs = get_next_fibs(current_fibs);

    let (n, _) = current_fibs;

    if n > 4000000 {
      break;
    }

    if n % 2 == 0 {
      sum += n;
    }
  }

  println!("{}", sum);
}
