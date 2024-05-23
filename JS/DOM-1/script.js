/*Window object 
The window object represents an open window in a browser
Created by browser 
All the functions and methods are a part of window object

What is DOM ??
it is Document object model 
the fact that we can access all the things in HTML file in JavaScript file is DOM
these elements from HTML come in JS and create an object called Document available in Window object
console.log() -- prints whatever is written in it, this treats document objects as special
console.dir() -- prints document and document objects properties
we can access HTML in JS in Window Object inside Document (representation of HTML elements) which is called DOM
DOM is tree like structure 
Window --> Document --> HTML --> Body --> div --> img, h1, p ...
                        |       |--> script
                        |--> Head --> meta, meta, title, link
each node is an object

*/

console.dir(document.body);
console.log(document.body);


//DOM Manipulation 
//Access using ID
let heading = document.getElementById("heading1");
console.dir(heading);

//Access using Class
let heading2 = document.getElementsByClassName("nigesh");
console.dir(heading2);

//Access using tag name
let access = document.getElementsByTagName("p");
console.dir(access);

//Access using Query Selector we can pass id,class and also tag it will detect on its own
let elements = document.querySelector("p");  //for first element with given id,class or ttag
console.dir(elements);

let ele = document.querySelectorAll("p") // gives all the result
console.dir(ele);

//class name to be written with a "."
let ele2 = document.querySelector(".nigesh");
console.dir(ele2);

let ele3 = document.querySelectorAll(".nigesh");
console.dir(ele3);

//Id name to be written with a "#"
let ele4 = document.querySelector("#heading1");
console.dir(ele4);
//querySelectorAll does not make sense in ID since unique for all

//Properties to get and set values
//tagName : returns tag name of given element node
console.dir(ele4.tagName);

//innerText : returns the text content of the element and all its children
let div = document.querySelector("div");
console.dir(div.innerText);

//innerText : returns the tags 
console.dir(div.innerHTML);

//we can give these things new value as well
div.innerText = "This is new text";
console.dir(div.innerText);

//we can also change HTML as well
div.innerHTML = "<div>NIGESH</di>";
console.dir(div.innerHTML);

//textContent : returns text content even for hidden elements
console.dir(div.textContent);