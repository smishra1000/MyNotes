/**
 * JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback
 hell leading to unmanageable code
Promises are used to handle asynchronous operations in JavaScript.
 */



/**
 * let promise = new Promise(function(resolve, reject){
     //do something
});
Parameters

The promise constructor takes only one argument which is a callback function
The callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.
 */


let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})
 
promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked 
        console.log(errorMessage);
    });