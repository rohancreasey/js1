/*
Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after if has been fulfilled by passing
console.log to then.
*/


   var promise = new Promise(function (fulfill, reject) {
      // Your solution here
      promise.then(
      		setTimeout( 
      			console.log('FULFILLED!')
      		), 300)
    });
    
    // Your solution here
