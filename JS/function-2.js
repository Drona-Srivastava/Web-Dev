/*
create a function using function keyword that takes string as an argument & returns the number of vowels in the string 
*/
function checkvowel(str){
    let count = 0;
    for (let i of str){
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" || i==="A" || i=="E" || i=="I" || i==="O" || i==="U" ){
            count++;
        }
    }
    console.log(count);
}

checkvowel("Abhishekh");

//Create arrow function to perform same task
const vow = (str) => {
    let count = 0;
    for (let i of str){
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" || i==="A" || i=="E" || i=="I" || i==="O" || i==="U" ){
            count++;
        }
    }
    console.log(count);
}

vow("Drona");