/* Finding Admin Users */
/*Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.*/


var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin);


/* What's Your Balance? */
/*Find the account with a balance of 12 and assign it to the variable 'account'.*/

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance === 12);
