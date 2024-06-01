/* 
Create a new class Admin() which inherits from User. Add a new method called editDara() to Admin that allows to edit website data
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

class Admin extends User{
    editData(newname,newemail){
        this.name = newname;
        this.email = newemail;
        super.viewData();
    }
}


let namein = prompt("Enter your name: ");
let emailin = prompt("Enter your email: ");
let user1 = new User(namein,emailin);

let Admin1 = new Admin();