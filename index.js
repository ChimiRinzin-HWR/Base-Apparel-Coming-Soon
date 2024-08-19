const submit = document.getElementById("button");
submit.addEventListener("click", myfunction);
const textfield = document.getElementById("email");
const regex = /^([\w]*)@([\w]*)\.(com)$/g;
const errori = document.querySelector(".errori");
const error = document.querySelector(".error");


function myfunction(event){
    event.preventDefault();
    let word = textfield.value;
    if(word.search(regex) != -1 && word !== ""){
        errori.style.display = "none";
        error.style.display = "none";
    }
    else{
        errori.style.display = "block";
        error.style.display = "block";
    }
}