// Function Declaration
function goodMorning() {
  console.log('Good Morning');
}

// It not return anything, so it will be undefined!
const x = goodMorning();
console.log('x: ', x);

// Function Expression 
const goodAfternoon = function () {
  console.log('Good Afternoon');
}

goodAfternoon();