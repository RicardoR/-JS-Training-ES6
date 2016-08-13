/* Distance Traveled */
/*Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'*/

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

trips.reduce(function(totalDistance, trip){
	return totalDistance + trip.distance;
},0);


/*Reducing Properties*/
/*Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
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
