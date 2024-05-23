let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("Button was clicked.")
}

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("Button was clicked 2 times")
}

//JS code has more priority over inline HTML code

let div = document.querySelector(".box");
div.onmouseover = () => {
    console.log("You are inside div");
}



btn1.addEventListener("click", () =>{
    console.log("button1 was clicked - handler 1")
})

btn1.addEventListener("click", () =>{
    console.log("button1 was clicked - handler 2")
})

let handler3 = () =>{
    console.log("button1 was clicked - handler 3")
}
btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () =>{
    console.log("button1 was clicked - handler 4")
})


//to delete event listener
btn1.removeEventListener("click",handler3) // this wont work since both the function do same work but are diff function 
//so we nee to create a function stored in a variable and then do this 