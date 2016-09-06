/*Destructuring in Practice*/

/*The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?*/

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

isEngineer(profile);



/*Array Destructuring in Practice*/

/*The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]*/


const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
	return {subject: subject, time:time, teacher:teacher};
});

classesAsObject;