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

let x = 3;
console.log(x * x);
//Why use even use variable?
//If we hard code, don't use variables at all, our code will not be dynamic
// Variables can change and it allows us to do dyanmic things with our code.

/* 
let user = "Jino" // Assign the value "Jino" variable user
user = "Xu Jie" // Reassign the value "Xu Jie" to the variable user
console.log("Hello " + user)// Print the value of the variable user
*/

const user = "XJ"; // Assign the value "XJ" variable user
// ERROR unable to reassign the value "Alex" to the variable user
console.log("Hello " + user); // Error on previous code

/* pt. 1: 
    Research JavaScript Datatypes
    console.log("one") //string
    console.log(1); // number
    console.log(1n) // BigInt numbers too large values to be represented
    console.log(true); // boolean, true or false value
    console.log(Symbol()) // Symbol (Introduced in 2015) https://playcode.io/javascript/symbols
    console.log({}); // object 
    console.log(null); // null, no value
    console.log(); //undefined, unassigned variable  
*/

//pt. 2: Short quiz;
/*
Q1: What is the % operator called and what does it do?
This is the remainder operator, it gives you the leftover remainder when one number is divided by another number

Q2: Why does true + true resolve to 2?
Because the "+" operator is only used for addition and concatenating of numbers or strings
So Javascript will try it's best to give you an output value,
meaning it converts the "true" value into 1 (as compared to 'false' = 0)
Therefore, true + true = 2.

The + symbol is both the addition and concatenator operator
JavaScript is referred to at this case as weak typing because when you multiple strings say "1.5" * "2" you will get 3
As compared to a strongly type language which will produce an error.
*/
