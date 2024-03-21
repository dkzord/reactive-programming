function exec(fn, a, b) {
  return fn(a, b)
}

// const exec = (fn, a, b) => fn(a, b)

const sumInTerminal = (a, b) => console.log(a + b)
const subInTerminal = (a, b) => console.log(a - b)

exec(sumInTerminal, 56, 38)
exec(subInTerminal, 182, 27)

