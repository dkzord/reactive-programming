// setTimeout(() => {
//   console.log('Executing callback...')

//   setTimeout(() => {
//     console.log('Executing callback... 2')

//     setTimeout(() => {
//       console.log('Executing callback... 3')
//     }, 2000);
//   }, 2000);
// }, 2000); // Callback hell

// (function waitFor(time = 2000) {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       console.log('Executing promise resolver...')
//       resolve('vixiiii')
//     }, time);
//   });
// })(2000).then(console.log)

function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log('Executing promise resolver...')
      resolve('vixiiii')
    }, time);
  });
}

waitFor(3000)
  .then(() => waitFor())
  .then(waitFor)
  .then(console.log)
