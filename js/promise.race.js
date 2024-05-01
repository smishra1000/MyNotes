// The Promise.race() static method accepts a list of promises as an iterable 
// object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects,
//  with the value or reason from that promise.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));

    // The following example creates two promises. The first promise resolves in 
    // 1 second while the second one rejects in 2 seconds. Because the first 
    // promise is faster than the second one, the returned promise resolves to
    //  the value of the first promise: