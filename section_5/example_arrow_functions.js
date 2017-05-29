var names = ["Bryce", "Austin", "Mike", "Jeremy"]

// names.forEach(function(name) {
//   console.log("Each", name);
// });

// names.forEach((name) => {
//   console.log("Arrow 1", name);
// });

// names.forEach((name) => console.log('Arrow 2', name));


// var person = {
//   name: 'Bryce',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }

// person.greet();

// Challenge

// function add(a, b) {
//   return a + b;
// }

// var add = (a, b) => {
//   return a + b;
// }

var add = (a, b) => a + b;

console.log(add(1, 3));