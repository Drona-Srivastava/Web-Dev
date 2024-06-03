// A callback is a function passed as an argument to another function
function sum(a,b){
    console.log(a+b);
}
function calc(a,b,sumcall) {
    sumcall(a,b);   
}

calc(1,2,sum);
//here sum is callback function

//this is a normal call back function
function getData(dataId) { // assume this is a database and take 2s to fecth the data
    //to mimic behaviour of database fecthing we added setTimeout
    setTimeout(() => {
        console.log(`Data = ${dataId}`);
    },2000);
}

getData(1654);



