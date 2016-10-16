/* Distance Traveled */
/*Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'*/

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

trips.reduce(function(totalDistance, trip){
	return totalDistance + trip.distance;
},0);


/*Reducing Properties*/
/*Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)*/


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(deskType, desk) {
    if(desk.type === 'sitting') {
    	 deskType.sitting++;
    }else{
    	deskType.standing++;
    }
  return deskType;
}, { sitting: 0, standing: 0 });


/*Hardmode: Custom 'Unique' Helper*/
/*
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.
*/


var numbers = [1, 1, 2, 3, 4, 4];
var uniqueNumbers = [];

function unique(numbers) {
  return numbers.reduce(function(arr, num){
   /*
	 //Find, forma 1
   var isInArr = arr.find(function(number){
      	return number == num;
    });
   */
	 // Find con función Arrow
    var isInArr = arr.find(number => number == num);
    
   	if(isInArr == null)
    	arr.push(num);

    return arr;

  },[]);
}

uniqueNumbers = unique(numbers);
