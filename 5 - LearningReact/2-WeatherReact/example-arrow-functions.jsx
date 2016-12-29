// var names = ['tom', 'mike', 'tim']

// names.forEach(function (name) {
//   console.log('forEach', name)
// })

// // multiple lines
// names.forEach((name) => {
//   console.log('arrowFunc', name)
// })

// names.forEach((name) => console.log(name))

// var returnMe = (name) => name + '!'
// console.log(returnMe('florin'))

// var person = {
//   name: 'tim',
//   greet: function () {
//     names.forEach((name) => { // arrow does not update this keyword
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }

// person.greet()

// function add (a, b) {
//   return a + b
// }

// var add = (a, b) => a + b

var add = (a, b) => {
  return a + b
}

console.log(add(1, 3))
console.log(add(9, 0))
