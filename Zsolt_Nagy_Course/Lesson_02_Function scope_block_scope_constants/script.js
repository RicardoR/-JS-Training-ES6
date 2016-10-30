// http://www.zsoltnagy.eu/es2015-lesson-2-function-scope-block-scope-constants/
/*
Modify the code such that all six console logs print out their values exactly once, and the printed values are the following:
1 3
1 3
1 2
5
5 6
1 2
*/

'use strict';

var guessMe1 = 1;
let guessMe2 = 2;

{
   let guessMe2 = 3;
   console.log( guessMe1, guessMe2 );
   console.log( guessMe1, guessMe2 );
}

console.log( guessMe1, guessMe2 );

(() => {
    var guessMe1 = 5;
    console.log( guessMe1 );

    let guessMe2 = 6;
    console.log( guessMe1, guessMe2 );
})();

console.log( guessMe1, guessMe2 );