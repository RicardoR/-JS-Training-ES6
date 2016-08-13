/* Finding Submitted Users */
/* Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted' */

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

hasSubmitted = users.every(function(user){
	return user.hasSubmitted;
});


/* In Progress Network Requests */
/*Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.*/

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = false;

inProgress = requests.some(function(inProgress, request){
	if (request.status === 'pending')
	    inProgress = true;

	return inProgress;
});
