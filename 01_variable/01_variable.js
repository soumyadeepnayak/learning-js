const accountId= 144536
let acconutEmail= "soumyadeepnauak@gmail.com"
var accountPassword= "12345678"
accountCity= "Kolkata"
let accountState;
// accountId= 2 // not allowed

console.table([accountId, acconutEmail, accountPassword, accountCity, accountState])

/*
when a variable is declared using const, it must be initialized at the time of declaration.
If you try to reassign a value to a const variable, you will get an error.
*/

/*
When a variable is declared using let or var, it can be initialized later in the code.
*/

/*
If you declare a variable without using any keyword, it becomes a global variable.
*/

/*
when a variable is initialized without any value, it will be undefined.
*/

acconutEmail="dsfbnfns@gmail.com"
accountPassword="1234567890"
accountCity="delhi"

/*
Prefer not to use var keyword because of hoisting and scope issues.
*/

console.table({accountId, acconutEmail, accountPassword, accountCity})