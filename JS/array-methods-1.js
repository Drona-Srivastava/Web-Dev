//Map
//similar to forEach just a new array is created unlike forEach where original array is altered
let arr = [24,235,756,34,67,45];
let newarr = arr.map((val)=>{
    return val*val;
})

console.log(newarr);

//map is used when we want to create a new array after performing some operation


//Filter method
//Creates a new array after filtering for a condition
let newarr1 = arr.filter((val)=>{
    return val%2==0; // condition if true that performs operation
})

console.log(newarr1);

//Reduce method
//where input is alot but output is only 1 value
//performs operation and reduces the array to a single value and returns that single value
const arr1 = [1,2,3,4];
const sum = 0;
const final =  arr1.reduce((res,curr)=>{
    return res+curr;
})
console.log(final);
// in start res=1 and curr=2 -- first two values
// the sum stored in res=3 (1+2) and curr=3
// then res=6(3+3) and curr=4
// then res=10(6+4)
// res given as output sinces it does not have any other value for curr

//for largest value
const max = arr1.reduce((res,curr)=>{
    return res>curr ? res : curr;
})
console.log(max);
