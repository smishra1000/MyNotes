Q.1>
function foo() {
  console.log(a);
  let a = 10;
}
foo();

2>
foo();
function foo() {
  console.log('Hello, world!');
}
var foo = function() {
  console.log('Goodbye, world!');
};
foo();

3>

var x = 5;

function test() {
  console.log(x);
  var x = 10;
}

test();

4>
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // Can you access i here?

5>
if (true) {
  let message = "Hello!";
}

console.log(message); //

6>

const obj = { name: "Alice" };

obj.name = "Bob"; // Will this change the name property?

console.log(obj.name);


7>
var x = 10;

function test() {
  var x = 20;
  console.log(x); // Which x is accessed here?
}

test();
console.log(x); // Which x is accessed here?

8>
var variable = 10;
(()=>{
   console.log(variable);
   var variable = 20;
   console.log(variable);
})();

9>
var variable = 10;
(()=>{
   console.log(variable);
   variable = 20;
   console.log(variable);
})();

10>
var variable = 10;
(()=>{
   console.log(variable);
   variable = 20;
   console.log(variable);
})();
var variable = 30;
console.log(variable);
