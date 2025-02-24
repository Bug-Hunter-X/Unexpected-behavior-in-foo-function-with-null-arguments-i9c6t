function foo(a, b) {
  a = Number(a);
  b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return NaN;
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
console.log(foo(1, 2)); // Output: 3