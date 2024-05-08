Constructors
Constructors in JavaScript are special functions that are used to construct objects.

function Person () {
     this.firstname = "Lawrence"
     this.lastname = "Eagles"
     this.occupation = "Software Developer"
     this.gender = "male"
}

const p1 = new Person(); 
console.log(p1);

Below are the operations of the new operator on a function constructor.

Creates an empty object and binds (points) the this variable to the newly created object.
Returns the object the this variable binds to (the newly created object) if the function doesn't return its own object (this is why constructors 
  should not have a return statement)

function User(){
  return {age:40}
}
let u1 = new User()

Also notice the User constructor that returns its own object fails to return the object created from the new operator. This is a pitiful we must 
  avoid. Again, as a rule, a constructor should not have a return statement



Note---------------Basically if your constructor returns a primitive value, such as a string, number, boolean, null or undefined,
  (or you don't return anything which is equivalent to returning undefined), a newly created object that inherits from the constructor's 
  prototype will be returned.

That's the object you have access with the this keyword inside the constructor when called with the new keyword.

But if the returned value is an object reference, that will be the returned value, e.g.:

function Test2() {
  this.foo = ""; // the object referred by `this` will be lost...
  return {foo: 'bar'};
}

var obj = new Test2();
obj.foo; // "bar"
