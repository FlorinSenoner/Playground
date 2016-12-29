// function getTempCallback (location, callback) {
//   callback(undefined, 78) // no error, only temp
//   callback('city not found') // error, no temp
// }

// getTempCallback('Ortisei', function (err, temp) {
//   if (err) {
//     console.log('error', err)
//   } else {
//     console.log('success', temp)
//   }
// })

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(24)
//       reject('city not found')
//     }, 1000)
//   })
// }

// getTempPromise('ortisei').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err)
// })

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') resolve(a + b)
    else reject('not two numbers')
  })
}

addPromise(2, 3).then(function (sum) {
  console.log('promise success', sum)
}, function (err) {
  console.log('error', err)
})

addPromise('2', 3).then(function (sum) {
  console.log('promise success', sum)
}, function (err) {
  console.log('error', err)
})

