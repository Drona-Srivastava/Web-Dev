/*
Prompt user to enter their full name. Generate a username for them based on the input.
Start username with @ followed by their full name and ending with the fullname lenght
*/

let fullname = prompt("Enter your full name without spaces: ");
let username = `@${fullname}${fullname.length}`;
console.log(username);

// correct code just connect with a html page will work