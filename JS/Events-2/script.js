/*
Create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again
*/
let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
let mode = "light";
let dark = () => {
    if(mode==="light"){
        //body.style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
        console.log("Dark Mode Activated");
        mode="dark";
    }
    else if(mode==="dark"){
        //body.style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log("Light mode activated");
        mode="light";
    }
}
toggle.addEventListener("click",dark);  