/* 
You are creating a website for your college. 
Create a class User with 2 properties name & email.
it also has a method called viewData() that allows user to view website data
*/

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`The name is ${this.name} & the email is ${this.email}`);
    }
}

let namein = prompt("Enter your name: ");
let emailin = prompt("Enter your email: ");
let user1 = new User(namein,emailin);