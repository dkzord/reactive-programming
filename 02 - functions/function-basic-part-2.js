function goodMorning() {
  console.log('Good Morning');
}

const goodAfternoon = function () {
  console.log('Good Afternoon');
}

function execAnything(fn) {
  console.log(typeof fn);
  // fn();
}

// execAnything(3);
// execAnything(goodMorning); // function!
// execAnything(goodAfternoon); // It will be a function too!

// 02 - Return a function from a function
function power(base) {
  return function (exp) {
    return Math.pow(base, exp);
  }
}

const powerOfTwo = power(2);
console.log('Base 2', powerOfTwo(8));
console.log('Base 3', power(3)(4));