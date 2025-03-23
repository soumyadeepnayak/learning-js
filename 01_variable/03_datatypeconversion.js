let score = null

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN ; NaN => Not a Number ; typeof NaN is => number
// true => 1 ; false => 0
// null => 0 


let isLoggedIn = " "

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1=> true ; 0=> false
// "" => false ; " " => true
// null => false ; 0 => false
// "soumyadeep" => true ; "0" => true

let someNumber = 452
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

let value=3
// let negvalue=-value
// console.log(negvalue)

// console.log(1+"1")
// console.log("1"+1)
// console.log("1"+"1")
// console.log("1"+2+1)  // output is 121 because first one is string then it will treat all as string  
// console.log(1+2+"1") // output is 31 because first two are number then it will add first two then it will treat as string

console.log(true) // output is true
console.log(+true) // output is 1
console.log(+"") // output is 0


let gameCounter=100
gameCounter++
console.log(gameCounter) // output is 101
++gameCounter
console.log(gameCounter) // output is 102
//read about postfix and prefix operator from mdn
