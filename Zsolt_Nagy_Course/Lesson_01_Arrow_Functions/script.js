// http://www.zsoltnagy.eu/es2015-lesson-1-arrow-functions/
//Exercise 1: Write an arrow function that returns the string 'Hello World!'.

var salutation = () => console.log("Hello World!");
salutation();

//Exercise 2: Write an arrow function that expects an array of integers, and returns the sum of the elements of the array.
//Use the built-in method reduce on the array argument.

var numberArray = [1,4,5,8,9,12];
var arraySum = (numberArray) => {
    return numberArray.reduce((prev, curr) => prev + curr);
};
var sum = arraySum(numberArray);
console.log(sum);

//Exercise 3: Rewrite the following code by using arrow functions wherever it makes sense to use them:

/*var Entity = function( name, delay ) {
this.name = name;
this.delay = delay;
};

Entity.prototype.greet = function() {
    setTimeout( function() {
        console.log( 'Hi, I am ' + this.name );
    }.bind( this ), this.delay );
};

var java = new Entity( 'Java', 5000 );
var cpp = new Entity( 'C++', 30 );

java.greet();
cpp.greet(); */

var Entity = function( name, delay ) {
    this.name = name;
    this.delay = delay;
};

Entity.prototype.greet = function() {
    setTimeout( () => {
        console.log( 'Hi, I am ' + this.name );
    }, this.delay );
};

var java = new Entity( 'Java', 5000 );
var cpp = new Entity( 'C++', 30 );

java.greet();
cpp.greet();