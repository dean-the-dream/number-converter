const modeButtonGroup = document.querySelector(".mode-switch-container");
const modeButtons = document.querySelectorAll(".mode-switch");
const inputField = document.querySelector(".number-submit-label input");
const form = document.querySelector("form");

function chooseMode (e){
    console.log(e)
    modeButtons.forEach(element => {
       element.style = null; 
    });
    if(e.target.className == "mode-switch"){
        e.target.style = `background-color: #4E148C;
        height:175px;
        color: white;`
        let mode = e.target.firstElementChild.nextElementSibling.innerText
        inputField.placeholder = `Enter a ${mode} to convert.`
    } 
    if (e.target.parentElement.className == "mode-switch"){
        e.target.parentElement.style = `background-color: #4E148C;
        height:175px;
        color: white;`
        let mode = e.target.parentElement.firstElementChild.nextElementSibling.innerText
        inputField.placeholder = `Enter a ${mode} to convert.`
    }
}


function pressConvert (e) {
    console.log(e)
    if(e.target.className == "submit"){
        console.log(e)
        e.preventDefault();
    }
    
}


for(i in modeButtons){
   modeButtons[i].addEventListener("click",chooseMode); 
}

form.addEventListener("click",pressConvert);
