console.log(1 + 1); //number
console.log("1" + "1"); //strings joined together is known as concatenation (verb: concatenate)
console.log((e = true)); //Boolean
console.log("2" / "2"); // JavaScript will turn your strings into numbers to give you the best results
console.log(null); //Null
//NaN = Not a Number

//Data Types determine what operations JavScript can perform on the given datatype

/*
let myName = "Xu Jie";
function sayHello() {
  document.addEventListener("click", () =>
    alert(`Hello, my name is ${myName}.`)
  );
}

sayHello();
console.log();
*/

let x = 3
console.log(x * x)
//Why use even use variable?
//If we hard code, don't use variables at all, our code will not be dynamic
// Variables can change and it allows us to do dyanmic things with our code.

/* 
let user = "Jino" // Assign the value "Jino" variable user
user = "Xu Jie" // Reassign the value "Xu Jie" to the variable user
console.log("Hello " + user)// Print the value of the variable user
*/

const user = "XJ" // Assign the value "XJ" variable user
// ERROR unable to reassign the value "Alex" to the variable user
console.log("Hello " + user)// Error on previous code


/* pt. 1: 
    Research JavaScript Datatypes
    console.log([]); // array
    trueTypeOf({}); // object
    trueTypeOf(""); // string
    trueTypeOf(new Date()); // date
    trueTypeOf(1); // number
    trueTypeOf(function () {}); // function
    trueTypeOf(/test/i); // regexp
    trueTypeOf(true); // boolean
    trueTypeOf(null); // null
    trueTypeOf(); // undefined
*/

//pt. 2: Short quiz;
/*
Q1: What is the % operator called and what does it do?
Remainder operator, it gives you the remainder of 2 numbers

Q2: Why does true + true resolve to 2?
*/