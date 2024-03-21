// 01 - SUM use sum(1)(2)(5)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(sum(3)(4)(5));

// Calculate the value and function - calculate(3)(7)(fn)
function calculate(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    }
  }
}

console.log(calculate(3)(7)(function (a, b) {
  return a * b;
}))