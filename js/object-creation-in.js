1. Creating objects using object literal -----------------------------------------------

const person = {
    firstName: 'testFirstName',
    lastName: 'testLastName'
  };

  2. Using the ‘new’ keyword with’ in-built Object constructor function-----------------------------------------

  To create an object, use the new keyword with Object() constructor, like this:
  
  const person = new Object();

  Now, to add properties to this object, we have to do something like this:

person.firstName = 'testFirstName';
person.lastName = 'testLastName';

b) Using ‘new’ with user defined constructor function--------------------------------

The other problem with the approach of using the ‘Object’ constructor 
function result from the fact that every time we create an object, we have
 to manually add the properties to the created object.

What if we had to create hundreds of person objects? 

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  Now, anytime you want a ‘Person’ object, just do this:
  
  const personOne = new Person('testFirstNameOne', 'testLastNameOne');
  const personTwo = new Person('testFirstNameTwo', 'testLastNameTwo');


  3. Using Object.create() to create new objects------------------------------------

  The Object.create() method creates a new object, using an existing object as
   the prototype of the newly created object.
To understand the Object.create method, just remember that it takes two
 parameters. 
 The first parameter is a mandatory object that serves as the prototype of the
  new object to be created.

   The second parameter is an optional object which contains the properties to 
   be added to the new object.

   const orgObject = { company: 'ABC Corp' };

   And you want to create employees for this organization. Clearly,
    you want all the employee objects.

const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

console.log(employee); // { company: "ABC Corp" }
console.log(employee.name); // "EmployeeOne"


4. Using Object.assign() to create new objects---------------------------------------------
What if we want to create an object that needs to have properties from more 
than one object? Object.assign()

The Object.assign() method is used to copy the values of all enumerable own 
properties from one or more source objects to a target object. It will return 
the target object.

Object.assign method can take any number of objects as parameters. The first 
parameter is the object that it will create and return. The rest of the objects
 passed to it will be used to copy the properties into the new object

 const orgObject = { company: 'ABC Corp' }
const carObject = { carName: 'Ford' }

Now, you want an employee object of ‘ABC Corp’ who drives a ‘Ford’ car.
 You can do that with the help of Object.assign as below:

const employee = Object.assign({}, orgObject, carObject);

Now, you get an employee object that has company and carName as its property.

console.log(employee); // { carName: "Ford", company: "ABC Corp" }

5. Using ES6 classes to create objects---------------------------------------------------------------------
You will notice that this method is similar to using ‘new’ with user defined constructor function. The constructor functions are now replaced by classes as they are supported through ES6 specifications. Let’s see the code now.

class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

const person = new Person('testFirstName', 'testLastName');

console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName



https://medium.com/@kamresh485/mastering-javascript-object-defineproperty-a-comprehensive-guide-with-coding-examples-f3ed633f2bfa
