//Inheritance
/* class Parent{

}

class Child extends Parent{

} */
//Inheritance syntax
class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{
    //Child inherits hello function from Parent 
}

let obj = new Child();
console.log(obj.hello());

//Multiple Inheritance

class Person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve Problems");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}

//if Person also as has a function named work it gets overrided by the function in the child class
//Called Method Overriding in JS


//Super Keyword
//Used to call the constructor of its parent class to access the parent's methods

class Person2{
    constructor(name){
        console.log("Enter parent constructor");
        this.name = name;
        this.species = "Homo Sapiens";
        console.log("Exit parent constructor");
    }
    eat(){
        console.log("Eat");
    }
}

class Engineer2 extends Person2{
    constructor(name,branch){
        console.log("Enter child constructor");
        super(name); //to invoke parent class construtor 
        //passes name varialbe to parent constructor
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work(){
        //we can use super to also access methods of parent in child
        super.eat();
        console.log("Solve Problems");
    }
}

let engobj = new Engineer2("Drona","CS");
/* Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Engineer2 (app.js:64:9)
    at app.js:71:14 */
//Error shown 
//we have to call super constructor to call the parent class constructor first

console.log(engobj);

/* 
flow with super
Enter child constructor
Enter parent constructor
Exit parent constructor
Exit child constructor 
*/

console.log(engobj.work());