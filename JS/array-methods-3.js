/*
take a number n as input form user. create an array of numbers from 1 to n 
use reduce method to calculate sum of numbers in array
use reduce method to calculate product of all number in array
*/
let arr = [];
//let num = prompt("Enter your number"); will work once we connect this to html page
let num = 5;
for(let i=1,j=0; j<num,i<num+1;j++,i++){
    arr[j] = i; 
}
const sum = arr.reduce((res,curr)=>{
    return res + curr;
})

const product = arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(`The sum of all the numbers is ${sum}`);
console.log(`The product of all the numbers is ${product}`);