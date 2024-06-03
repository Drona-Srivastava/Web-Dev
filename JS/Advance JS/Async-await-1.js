/* 
Asynchronous Programming
Promise chains
Callback hell 

Synchronous
the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous to complete its execution 
Asynchronous
due to synchrounous programming sometimes imp instructions get blocked due to some previous instruction, which cause a delay in the UI.
Asynchronous code execution allows to execute next instruction immediately and doesn't block the flow
 */

//helpfull when some part of code is taking more than expected time like APIs

//setTimeout() Executes a function with mentioned delay
console.log("one");
console.log("two");
function hello() {
    console.log("Hello");
}
setTimeout(hello,2000); //2sec, 2000ms
console.log("three");
console.log("four");
//one two three four will get printed then the hello function run with its mentioned delay
//here we have used asynchronous programming