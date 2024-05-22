/*
given an array of marks of students filter out the marks of studen that scored 90
*/
let marks = [56,90,43,92,,90,94,89];
let answer = marks.filter((mark)=>{
    return mark>=90;
})
console.log(answer)