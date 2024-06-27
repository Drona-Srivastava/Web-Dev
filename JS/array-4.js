//Create an array to store companies
//1. Remove first company form array
//2. Remove Uber & Add Ola in its place
//3. Add Amazon at the end

let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comp);
// 1.
comp.shift();
console.log(comp); //deleted first company
// 2.
comp.splice(1, 1, "Ola");
console.log(comp); //Replaced Uber with Ola
// 3.
comp.push("Amazon");
console.log(comp); //added "Amazon" at the end
