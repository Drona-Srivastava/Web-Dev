// Class is a program code template for creating objects
//when we need to create bulk objects for similar data we use classes to create those objects
/* class Myclass {
    constructor(){

    }
    myMethod(){

    }
} basic syntax for class*/

class ToyotaCar{
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brand = brand;  // both brands are different variables
        //variable with this is from the object itself
    }
}
// to create obj using this template

let fortuner = new ToyotaCar();
//so now fortuner is an object created with the template of ToyotaCar class
console.log(fortuner);
console.log(fortuner.start());

fortuner.setBrand("Maruti");
console.log(fortuner);

//We prefer classes when we need to make multiple objects with same template

//Constructor in class -- method in a class
//automatically run by new keyword
//like consructor in C++
class Brands{
    constructor(){
        console.log("Creating new object");
    }
    //rest of the functions to be run with this class
}

let nirma = new Brands();
console.log("Brands2 --> ");
class Brands2{
    constructor(brand){
        this.brand2 = brand;
        console.log(brand);
    }
}

let hp = new Brands2("Mouse");