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


function task1(callback) {
    setTimeout(() => {
      console.log('Task 1 completed');
      callback();
    }, 1000);
  }
  
  function task2(callback) {
    setTimeout(() => {
      console.log('Task 2 completed');
      callback();
    }, 1000);
  }
  
  function task3(callback) {
    setTimeout(() => {
      console.log('Task 3 completed');
      callback();
    }, 1000);
  }
  
  // Callback Hell
  task1(() => {
    task2(() => {
      task3(() => {
        console.log('All tasks completed');
      });
    });
  });
  
//   Callback hell occurs when multiple asynchronous operations are nested 
//   within each other, leading to code that is difficult to read and maintain. 
//   Here's an example using three tasks: task1, task2, and task3, each representing
//    an asynchronous operation.