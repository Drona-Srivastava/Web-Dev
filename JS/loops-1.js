//loops
//for loop
console.log("For Loop");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//while loop
console.log("While Loop");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}


//Do-While loop
let j=1;
console.log("Do-While Loop");
do{
    console.log(j);
    j++;
}while(j<=5);

//for-of loop  -- could be used to iterate strings!!
let str = "Drona Srivastava";
let len = 0;
for(let i of str){  // i is not the index it is the value in the array or string
    console.log(i);
    len++;
}
console.log("Lenght = ",len);


//For-In loop same as for-of but for objects(Key:value pairs) and arrays
let student = {
    name:"Drona",
    age:19,
    cgpa:7.92
}
for(let i in student){
    console.log("key = ",i,"| value = ",student[i]); // gives key names
}
//or also like this
console.log("Value of name key : ",student["name"]);
