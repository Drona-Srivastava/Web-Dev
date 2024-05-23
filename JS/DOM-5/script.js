/*
Create a new button element. Give it a text "Click Me", background Color is red and font color is white
Insert button as the first element in the body tag
*/
let btn = document.createElement("button");
btn.innerText="Click Me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.height = "100px";
btn.style.width = "100px";

let body = document.querySelector("body");
body.prepend(btn);