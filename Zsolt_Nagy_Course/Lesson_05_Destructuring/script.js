// http://www.zsoltnagy.eu/es2015-lesson-5-destructuring/
/*
 Complete the below function that calculates the nth fibonacci number in the sequence with one destructuring assignment! The definition of Fibonacci numbers is the following:
 */

let car1 = 'Renault';
let car2 = 'Ford';

[car1, car2] = [car2, car1];


/*
 Complete the below function that calculates the nth fibonacci number in the sequence with one destructuring assignment! The definition of Fibonacci numbers is the following:

 fib( 0 ) = 0
 fib( 1 ) = 1
 fib( n ) = fib( n-1 ) + fib( n-2 );
* */
function fib( n ) {
    let fibCurrent = 1;
    let fibLast = 0;

    if ( n < 0 ) return NaN;
    if ( n <= 1 ) return n;

    for ( let fibIndex = 1; fibIndex < n; ++fibIndex ) {
        [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent]
    }

    return fibCurrent;
}

fib(6);

/*Create one destructuring expression that declares exactly one variable to retrieve <code>x.A[2]</code>*/
let x = { A: [ 't', 'e', 's', 't' ] };
let { A : [, , variable] } = x;