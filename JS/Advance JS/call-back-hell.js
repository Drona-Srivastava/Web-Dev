/*
Call back Hell
Call-back Hell : nested callbacks stacked below one another forming a pyramid structure (pyramid of doom)
this style of programming becomes difficult to understand & manage 

Nested call backs --> callback within callback 
lets say we want 
data1
then data2
and then data3
not toether 
data1 2s delay
then data2 2s delay
and so on 
*/

//to do this we will pass a new callback function getNextData
function getData2(dataId,getNextData) { // assume this is a database and take 2s to fecth the data
    //to mimic behaviour of database fecthing we added setTimeout
    setTimeout(() => {
        console.log(`Data = ${dataId}`);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData2(134,()=>{
    getData(256) // since we cannot write getData("134",getData("2")) as it would give an error so we write it as an arrow function and will not get executed immediately
});
// so now we get data1 with 2s delay and then data2 with another 2s delay

//but now if we want to add even more datas it will get even more nested and complex
getData2(1,()=>{
    console.log("getting data2.....");
    getData2(2,() => {
        console.log("getting data3......");
        getData2(3,()=>{
            console.log("getting data4.....");
            getData2(4);
        });
    }) 
});

//this is called callback hell beacause of so many nested callbacks and getting very complex
//this is very difficult to manage and understand
//So callback hell is problem in JS
//call back hell should be avoided not callback just the ones making hell(nested callback)
