let score = true
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/*
    "33" => 33
    "33abc" => NaN (Not a Number)
    "" => 0
    null => 0
    undefined => NaN
    true => 1
*/

let isLogedIn = undefined
let booleanIsLogedIn = Boolean(isLogedIn);
//console.log(booleanIsLogedIn);

/*
    1 => true
    0 => false
    "" => false
    "xyz" => true
    33 => true
    null => false
    undefined => false

*/

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/*
    33 => 33 (string)
*/
