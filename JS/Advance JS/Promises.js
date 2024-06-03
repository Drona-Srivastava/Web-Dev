/* 
The solution of this is promises 
Promises is for "eventual" completion of task. It is an object in JS
It is solution for call back hell
let promise = new Promise((resolve,reject) => {....})
function with two handlers
*/

let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    resolve(123)//created by JS
    // reject("some error occured");
});

/* 
Promise -- States
1. Pending
2. Fullfilled
3. Rejected */

/* 
Fullfilled state
Promise {<fulfilled>: 123}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 123
*/

/* 
Rejected State
Promises.js:12 Uncaught (in promise) some error occured 
*/

/* 
Promise objects are generally given to us by APIs and we handle those objects
*/

function getData2(dataId,getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            /* console.log(`Data = ${dataId}`);
            resolve("Success"); */
            reject("Error");
            if(getNextData){
                getNextData();
            }
        },5000); 
    });
}

//assume getData is an API giving a promise as an output
//until the function is completed the state is pending and once function is completed the state is full filled


//How to use a promise
//.then() & .catch()
//to do some function if promise is full-filled or rejected
//when full-filled we use .then()
//when rejected we use .catch()

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a Promise2");
        resolve("Success");
        // reject("Error");
    })
}

let promise2 = getPromise();
promise2.then((res) => {
    console.log("Promise Full-Filled.. ",res);
})

promise2.catch(() => {
    console.log("Error detected");
})