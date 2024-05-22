//take marks and find average
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i of marks){
    sum += i;
}
let avg = `The average of all the marks is ${sum/(marks.length)}`;
console.log(avg);