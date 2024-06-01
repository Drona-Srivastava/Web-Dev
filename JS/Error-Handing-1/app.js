//Try Catch block
/* 
try{
    ..normal code
} catch(err){
    ..handling error
}
*/

//we write the part of code where error can occur in try part
//and in catch block we handle our error


let a=5;
let b=10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c)//will give error
} catch(err){
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
//in this rest of the code will still run if we do face an error 
//if try catch not used the code would stop running once an error is encountered