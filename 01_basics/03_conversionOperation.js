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
//console.log(stringNumber);
//console.log(typeof stringNumber);

/*
    33 => 33 (string)
*/



//***************** Operations *****************

let value = 33
let negValue = -value
//console.log(negValue);  //-33

//console.log(2+2); //4
//console.log(2-2); //0
//console.log(2*2); //2
//console.log(2**3); //8
//console.log(2/2); //1
//console.log(2%2); //0


let str1 = "abc"
let str2 = "xyz"
let str3 = str1 + str2
//console.log(str3); //abcxyz

//console.log(1 + 2); //3
//console.log("1" + 2); //12
//console.log(1 + "2"); //12
//console.log("1" + 2 + 2); //122
//console.log(1 + 2 + "2"); //32


//console.log(+true); //1
//console.log(true+); // gives an error unexpected token

let gameCounter = 100
//console.log(++gameCounter); //101
console.log(gameCounter++); //100