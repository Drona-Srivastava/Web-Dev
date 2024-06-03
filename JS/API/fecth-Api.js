/* 
The fetch pi provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects
The fetch() mehtod is used to fecth a resource(data)
let promise = fecth(url,[options])
API -- Application Programming Interface
*/
 
const URL = "https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#fact");
const btn = document.querySelector(".btn");

const getFacts = async () => {
    console.log("Getting Data....")
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data[0].text);
    para.innerText = data[0].text;
}

btn.addEventListener("click",getFacts);
//Get Requests is default when nothing mentioned in fetch


/* 
AJAX -- Asynchronous JS & XML (old format)
JSON -- JavaScript Object Notation (modern format) -- like a JS object
json() method -- returns a second promise that resolves with the result of parsing the 
response body text as JSON(input is JSON, output is JS object)
we have to convert the response from API in JS object
1. Response (in JSON format)
2. Convert to JS object --- response.json();
*/

//HTTP verbs
//Response status codes 
//200-299(200) --> everything is OK
//400-499(404) --> Client error response
//500-599 --> Server error response

