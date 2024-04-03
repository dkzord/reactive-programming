function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve()
    }, time);
  });
}

// console.time('promise')
// waitFor(2000)
//   .then(() => console.log('First resolved promise...'))
//   .then(waitFor)
//   .then(() => console.log('Second resolved promise...'))
//   .then(waitFor)
//   .then(() => console.log('Third resolved promise...'))

// console.timeEnd('promise')

function returnValeu() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function execute() {
  let value = await returnValeu()

  await waitFor(1500)
  console.log(`First resolved promise ${value}...`)

  await waitFor(1500)
  console.log(`Second resolved promise ${value + 1}...`)

  await waitFor(1500)
  console.log(`Third resolved promise ${value + 2}...`)

  return value + 3
}

// execute().then(console.log)

async function executeTrue() {
  const value = await execute()
  console.log(value)
}

executeTrue()