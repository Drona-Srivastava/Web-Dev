/* 
Async function always returns a promise
aysnc function myFunc()
{....}
await pauses the execution of its surrounding asyc function until promise is settled
can be used only in async function
*/

function API(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200); //200 -- represents success full API call
        },2000);
    }); 
}

// await API(); //await can not used like this

async function getWeatherData(){
    await API(); //1st call
    await API(); //2nd call -- completed once 1st call is completed
}

function getData(dataId) { 
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data = ${dataId}`);
            resolve("Success");
        },100)
    })
    
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
}
//Now it will get all the datas each after waiting for the last API call to complete 
//This is better than Callback Hell and Promise Chains as well ...


//To use even await we have to make a new function neccessarily
//To bypass this we can use IIFE : Immediately Invoked Function Expression

/* 
ways to make an IIFE function
(function () {
    ...
})();

(() => {
    ...
})();

(async () => {
    ...
})();
*/

/* (async () => {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
})(); */

//Now this get executed at once but cannot be used again we have copy paste it everytime we want to use it
