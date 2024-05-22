/*
for a given array of numbers print the square of each value using the forEach loop
*/

let arr = [2,4,5,12,13,20];
arr.forEach((i)=>{
    let output = `The square of ${i} is ${i**2}`;
    console.log(output);
})