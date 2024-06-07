import { Computer } from "./computer.js";
// we can import a particuler function or class from another code using this
class Macbook extends Computer {
    constructor(name, company){
        super(name);
        this.company = company;
    }

    logIn() {
        console.log(`You are logged into a Macbook ${this.name}`)
    }
}

const mackbook_air = new Macbook('Air', 'Apple');
mackbook_air.logIn();
mackbook_air.run();