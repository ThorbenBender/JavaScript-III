/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when use this in the global element it points at the root element
* 2. points at the variable inside the object
* 3. creating an object with an constructor
* 4. when you bind an argument to a function, the this will point at the argument
*
* write out a code example of each explanation above
*/

// Principle 1
this.alert('Help');
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const Max = {
    name: 'Max',
    age: 20,
    greet: function() {
        return `Hi, my name is ${this.name}`
    }
}

// Principle 3

// code example for New Binding
function Car(name){
    this.name = name;
}
const fiat = new Car('fiat');
// Principle 4

// code example for Explicit Binding

function callMe(){
    console.log(`Please call ${this}`);
}
const callJames = callMe.bind('James');
console.log(callJames());