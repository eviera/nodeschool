function repeat(fn, num) {
  if (num <= 0) return;
  fn();
  return repeat (fn, --num);
}

module.exports = repeat;
