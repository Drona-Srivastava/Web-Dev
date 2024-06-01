const student = {
    fullname : "Drona Srivastava",
    marks : 95,
    printMarks : function() {
        console.log(`Marks = ${this.marks}`); //this refers to the same object
    }
};
//student object has a special property called prototype which itself is a object
console.log(student.fullname);
console.log(student.marks);
console.log(student.printMarks());
console.log(student.abc); //undefined
console.log(student.toString); //toString not defined but present in prototype present by default in an object
// all by default functions for an object or array are stored in the prototype inherited by our object or variable

const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    calcTax2 : function() {
        console.log("Tax rate is 20%"); // both are methods to write a function in an object
    }
}

console.log(employee.calcTax1());

const KaranArjun = {
    salary : 50000
}

//to use function from object1 in object 2 we can set object1 as a prototype in object2
KaranArjun.__proto__ = employee; // employee object set as prototype for karaArjun
console.log(KaranArjun.calcTax1());
//we can set a single object as prototype for multiple objects
//if i have an function in an object and a prototype function in the object with the same name if called object function is prioritised over prototype