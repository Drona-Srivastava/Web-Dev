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
