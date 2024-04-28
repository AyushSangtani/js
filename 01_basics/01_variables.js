const accountId = 14453
let accountEmail = "as@gmail.com"
var accountPassword = "12345"
accountCity = "Amreli"
let accountState; //undefined

// accountId = 1 // not allowed
accountEmail="ayush@gmail.com"
accountPassword="11111"
accountCity="Rajkot"

console.log(accountId);
/*
    prefere not to use var
    bacause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 