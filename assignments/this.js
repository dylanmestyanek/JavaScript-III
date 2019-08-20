/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When used in a global scope, 'this' will review to the window. You will receive information on the console object, and methods with the window.

* 2. Using dot notation, 'this' is used to refer to the object that is called on the left side of the dot. For example = exampleObj.myName('dylan'); 

* 3. When creating a new object using 'new', then 'this' refers to the variable's name of the object you created. For example: const me = new Person('Dylan'); this would refer to the object with the variable "me" attached to it. 

* 4. The fourth principle is when using .call(), or .apply(). These state exactly what your binding the 'this' keyword to. For example, me.speak.call(otherObjVariable). 'this' now refers to otherObjVariable.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const exampleObj = {
  name: 'Dylan',
  speak: function(){
    return `Hello, my name is ${this.name}!`
  }
};

console.log(exampleObj.speak());

// Principle 3

function Person(name) {
  this.name = name;
  this.greeting = `Welcome back,`;
  this.speak = function(){
    return `${this.greeting} ${this.name}!`
  }
}

const me = new Person('Dylan');
console.log(me.speak());

// Principle 4

function Person(attrs) {
  this.name = attrs.name;
}

Person.prototype.speak = function(){
  return `Hello ${this.name}!`
}

Child.prototype = Object.create(Person.prototype);

function Child(childAttrs){
  Person.call(this, childAttrs);
}

const me = new Child({
  name: 'Dylan',
});

console.log(me.speak());