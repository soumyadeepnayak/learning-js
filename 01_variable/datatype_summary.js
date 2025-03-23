// datatype are divided into two categories : Primitive Datatypes and Non-Primitive Datatypes

// Primitive has 7 types : String, Boolean, null, Number, Undefined, Bigint, Symbol

const score=100 //number
const scorevalue=100.5 //number
const isLogged=true //boolean
const temparature=null //null
let name //undefined
let userName="soumyadeep" //string
const id = Symbol('id') //symbol
const anotherId = Symbol('id') //symbol
const bignum=7856247865478554n //BigInt


console.log(id === anotherId);


// Reference datatypes has 3 types : Arrays, Objects, Functions

//Arrays
const hero= ["saktiman","nagraj","doga"];
//Objects
let obj={
    name:"soumyadeep",
    age:20
}
//Functions
const myFucntion =function(){
    console.log("Hello World");
}

console.log(typeof bignum);
// read the official documentation for typeof operator https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/