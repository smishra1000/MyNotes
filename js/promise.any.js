// The Promise.any() method accepts a list of Promise objects as an iterable object:

// Promise.any(iterable);

// If one of the promises in the iterable object is fulfilled, the Promise.any() 
// returns a single promise that resolves to a value which is the
//  result of the fulfilled promise:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 fulfilled');
      resolve(1);
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 fulfilled');
      resolve(2);
    }, 2000);
  });
  
  const p = Promise.any([p1, p2]);
  p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
  });
//   Promise.any() method that uses two promises p1 and p2. The Promise.any() 
//   returns a promise p that will resolve to the value 1 of the first fulfilled 
//   promise (p1) after one second.

// 2) One promise rejected example

const p11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected');
    reject('error');
  }, 1000);
});

const p22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled');
    resolve(2);
  }, 2000);
});

const pp = Promise.any([p1, p2]);
pp.then((value) => {
  console.log('Returned Promise');
  console.log(value);
});
// Promise.any() ignores the rejected promise. When the p2 resolves with the value
//  2, the Promise.any() returns a promise that resolves to the same value as
//   the result of the p2

// 3) All promises rejected example

const p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 rejected');
      reject('error1');
    }, 1000);
  });
  
  const p21 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 rejected');
      reject('error2');
    }, 2000);
  });
  
  const p0 = Promise.any([p1, p2]);
  p0.catch((e) => {
    console.log('Returned Promise');
    console.log(e, e.errors);
  });

//   In this example, both p1 and p2 were rejected with the string error1 and 
//   error2. Therefore, the Promise.any() method was rejected with
//    an AggregateError object that has the errors property containing all 
//    the errors of the rejected promises.