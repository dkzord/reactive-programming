// arrow function
// hast operator (...) is used to get all the arguments in an array
const sum = (...numbers) => {
  console.log(Array.isArray(numbers));

  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(sum(1, 2, 3, 4, 5, 5)); // 20

const power = (base) => (exp) => Math.pow(base, exp);
console.log(power(2)(3)); // 8