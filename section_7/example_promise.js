// Callback (worse methodology) Example

// function getTempCallback(location, callback) { 
//   callback(undefined, 78);
//   callback('Location not found');
// }

// getTempCallback('Asheville, NC', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// Promise Example

// function getTempPromise(location) { 
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('Location not found');
//     }, 1000);
//   });
// }

// getTempPromise('Asheville, NC').then(function(temp) { 
//   console.log('promise success', temp);
// }, function(err) { 
//   console.log('promise error', err);
// });

// Challenge Exercise

function addPromise(a, b) { 
  return new Promise(function(resolve, reject) {
    if (isNaN(a) || isNaN(b)) {
      reject('Inputs must be numbers');
    } else {
      resolve(a + b);
    }
  });
}


addPromise(2, 5).then(function(sum) { 
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});