let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click' , inputMsg);

function inputMsg(){
    let name = prompt('Enter the name of student: ');
    namastebtn.textContent='Roll No. 1 ' + name;
}