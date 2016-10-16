/*Many, Many Arguments*/

/*Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.*/

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

product(1,2,3,4);


/*Spreadin' Arrays*/

/*Refactor the following to use the spread operator.*/

function join(array1, array2) {
  return [...array1, ...array2];
}

var array1 = ['a', 'b', 'c'];
var array2 = ['1', '2', '3'];
join(array1, array2);



/*Mixing Rest and Spread*/

/*Refactor the following to use the only the rest operator*/

function unshift(array, ...items) {
   return [...items, ...array];
}