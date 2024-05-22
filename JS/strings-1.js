//Strings
let str = "Drona"
let str2 = 'Drona'
// " " & ' ' both valid
console.log(str.length);
console.log(str[0]);//index starts from 0
console.log(str2[1]);

//template literals
//way to have embedded expressions in a string
const item = {name:"Drona", Age:"19"}
let output = `the name is ${item.name} and age is ${item.Age}`; //this is called string interpolation -- added placeholders{} which gets access to variables

console.log(output);
//makes it easier to write things like this!!
let op1 = `the sum is ${1+2+3}`;
console.log(op1);

console.log("Drona \nSrivastava");//new line \n
// \t for tab space
//these character counted as 1 character
let op3 = "Drona\nS" // expected 8
console.log(op3.length); //answer 7


let str3 = "Drona Srivastava"
//str.toUpperCase() -- coverts all to upper case
console.log(str3.toUpperCase()); 
//str.toLowerCase() -- converts all to lower case
console.log(str3.toLowerCase());
//str.trim() -- removes whitespace starting and end only not in middle
let str4 = "     Drona Srivastava      "
console.log(str4.trim());
//str.slice(start,end) end non included
console.log(str3.slice(1,3));// ron expected answer -> ro
//str1.concat(str2)
let stri1 = "DronaD";
let stri2 = "Srivastava";
console.log(stri1.concat(stri2));
//also
console.log(stri1+stri2); 
//str.replace(searchval,newval) -- helps to search particular string in a whole string
console.log(stri1.replace("D","L"));  // replaces only first D
console.log(stri1.replaceAll("D","L")); //replaces all D
//str.charAt(charachter); to get charachter at a indec
console.log(stri1.charAt(3));

//*************************
//does not alter original string !
//because strings are immutable in JS
//**************************