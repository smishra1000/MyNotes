/**
 * In JavaScript, you can also pass a function as an argument to a function.
 *  This function that is passed as an argument inside of another function is 
 * called a callback function. For example,
 * */


// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe)

// The benefit of using a callback function is that you can wait for the result of a previous
// function call and then execute another function call.