//Attributes
//to get attribute value
//getAttribute(attr)
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//To set Attribute Value
console.log(para.setAttribute("class","newClass"));

//node.style to change value of any elements style
let div2 = document.querySelector("div");
div2.style.backgroundColor = "Purple"
div2.style.fontSize = "28px"
div2.innerText = "Hello"
//div2.style.visibility = "hidden";

//Insert Elements
//let el = document.createElement("div")
//node.append(el) adds at the end of node
//2 step 
// 1. create element
// 2. Adding to DOM
let btn= document.createElement("button");
btn.innerText = "Click Me!";
div2.append(btn); // at the end
//div2.prepend(btn); // at the start
//div2.before(btn); //Right at the start of the div
//div2.after(btn)l // right after the end of the div
// to add something in the body itself just select body
let body = document.querySelector("body")
body.prepend(btn);

//to delete any node
//node.remove
//div2.remove(); this will delete div2