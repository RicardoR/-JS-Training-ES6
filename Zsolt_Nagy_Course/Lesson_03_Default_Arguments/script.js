// http://www.zsoltnagy.eu/lesson-3-default-arguments/
/*
 Exercise 1. Write a function that executes a callback function after a given delay in milliseconds.
 The default value of delay is one second.
 */
var count = 1;

function ExecuteCallback(delay = 1000 ){
    console.log("First call");
    setTimeout(salutation, delay);
}

function salutation() {
    console.log("Callback!" + count);
    count ++;
}

ExecuteCallback();
ExecuteCallback(2000);

/*
 Exercise 2. Change the below code such that the second argument of printComment has a default value that’s initially 1,
 and is incremented by 1 after each call.
 */
let linea = 1;
function printComment( comment, line = linea++) {
    console.log( line, comment );
}

printComment("Hola");
printComment("Hola");
printComment("Hola");


/*
 Exercise 3 Determine the values written to the console.
 */

function argList( productName, price = 100 ) {
    console.log( arguments.length );
    console.log( productName === arguments[0] );
    console.log( price === arguments[1] );
}

argList( 'Krill Oil Capsules' );
// arguments.length => 1
// productName === arguments[0] => true
// price === arguments[1] => false