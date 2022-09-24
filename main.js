const modeButtonGroup = document.querySelector(".mode-switch-container");
const modeButtons = document.querySelectorAll(".mode-switch");
const inputField = document.querySelector(".number-submit-label input");

for(i in modeButtons){
   modeButtons[i].addEventListener("click",chooseMode); 
}

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
        inputField.value = `Enter a ${mode} to convert.`
    }
    

}