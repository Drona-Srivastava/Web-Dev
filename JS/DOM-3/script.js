let box = document.querySelectorAll(".box")
/*box[0].innerText = "This is new value for box 1";
box[1].innerText = "This is new value for box 2";
box[2].innerText = "This is new value for box 3";*/
let idx = 1;
for(div of box){
    div.innerText = `This is new value for box ${idx}`;
    idx++;
}