/*function functionName(){
    do some work
}
function functionName(parameter1,paramter2..){
    do some work
}
functionName() -- Call

*/

function myFunction(){
    console.log("Welcome to JS");
}
myFunction();

//arrow functions -- compact way of writing a fucntion
/*
regular functions
function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}*/
//arrow functions -->
(a,b) => {
    console.log(a+b);
}
//to execute we need to store this in a variable
const arrowsum = (a,b) => {
    console.log(a+b);
}

const arrowmul  = (a,b) => {
    console.log(a*b);
}
arrowsum(2,3); // call of arrow function
arrowmul(2,3); 

//arrowmul and arrowsum are just variable we can store new value in them if initialised using let 
