let array = [1,2,"Drona",3.45]
console.log(array[2]);
//homogeneous diff type of info can be stored
console.log(array.length);
console.log(typeof array); // is special type of object
//if we try to access an array which is not present output is undefined
//to change value in an array
array[2]= "Srivastava";
console.log(array);

//loop over array
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

//for-of loop
console.log("\nFor-Of Loop");
for(let i of array){
    console.log(i);
}

//Array methods

//Push() : to add item to end
let food = ["Burger", "pizza",69, "biryani"];
food.push("Dal");
console.log(food);
//Pop() : to delete from end and return new array
food.pop();
console.log(food);
//tostring() : converts array to string
console.log(food.toString()); //does not make changes in original string

//concat() -- Joins multiple arrays and returns result 
let arr1 = ["drona", 12 ,"HI"];
let arr2 = ["supp", 34, "Nigga"];
let arr3 = ['Nigehsh', 34];
let arr4 = arr1.concat(arr2,arr3); // does not change orignal array can also concatinate many arrays
console.log(arr4);

//unshift() : Works like push : adds item to start of the array
arr1.unshift("Gandu");
console.log(arr1);

//shift() : Works like pop : Deletes first item
arr1.shift();
console.log(arr1);

//slice() : retuns a piece of array
let arr5 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr5.slice(1,3));//does not make changes in original string end index is non-inclusive

//splice() : changes original array (add,remove,replace)
//splice(startinx,delcount,newelement)
//start index is counted as 1 deleted if we want to delete element at 2 index splice(2,1)
//can be used to add, delete or replace
//delete
arr5.splice(2,1);
console.log(arr5); // element at index 2 deleted
//adding
arr5.splice(2,0,3); // added "3" at index 2
console.log(arr5);
//Replace
arr5.splice(2,2,13,14)// replace element at 2 & 3 index with "13" & "14"
console.log(arr5);
//if we give only 1 parameter then it deletes all elements from that index
arr5.splice(3); // all elements from index 3 till end deleted
console.log(arr5);