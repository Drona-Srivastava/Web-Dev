// forEach Loop in Arrays
//functions can be used as a parameter in JS
//A callback is a fucntion passed as an argument to another fuction

let arr = [1,2,3,4];
arr.forEach(function myFunc(val){
    console.log(val);
})
console.log("USing arrow function");
//This takes each value in array as an input to perform the function using callback function
arr.forEach((val,idn,arr)=> {
    console.log(val,idn,arr);
})
console.log("Without arr as parameter")
arr.forEach((val,idn)=> {
    console.log(val,idn,arr);
})
//three parmeters can be used by forEach
//1. Value (variable for items for arr)
//2. Index of the items of array
//3. array itself it is default no need to write if want to use
//Higer order function/method -- Function which take other functions as a paramter or return another function
//forEach is a higher order function