function asycfunction() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data 1..");
            resolve("Suceess");
        },4000)
    })
}

function asycfunction2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data 2..");
            resolve("Suceess");
        },4000)
    })
}

/*console.log("Fetching Data 1")
const p1 = asycfunction();
//Promise handling
p1.then((res) => {
    console.log(res);
})

console.log("Fetching Data 2")
const p2 = asycfunction2();
//Promise handling
p2.then((res) => {
    console.log(res);
})


//We want to fecth second data once we get data 1

console.log("Fetching Data 1")
const p3 = asycfunction();
//Promise handling
p3.then((res) => {
    console.log(res);
    console.log("Fetching Data 2")
    let p4 = asycfunction2();
    p4.then((res) => {
        console.log(res);
    }) 
}) */

/* 
we can also write it as 
*/
asycfunction(1).then((res) => {
    return asycfunction2(2)
}).then((res) => {
    console.log(res);
})

//this is also same as callback hell but a little better
//To get a little better than this we use Aync-Await