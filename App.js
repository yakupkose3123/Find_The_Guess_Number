let input = document.querySelector("#inputNumber");
let button = document.querySelector("#submit-button");
let randomNumber = Math.floor(Math.random()*100);
let range = document.querySelector("#range");
let body = document.querySelector(".conteiner").parentElement;
let conteiner = document.querySelector(".conteiner");
let attempts = document.querySelector("#attempts");
let attempt = Number(attempts.innerText);
// console.log(attempt);

button.addEventListener("click", () => {
    checkInput(input.value)
    attempt--
    attempts.innerText = attempt
    if(attempt==0){
        window.alert("GAME OVER");
         location.reload();
        
    }


})
let max = 100;
let min = 0;

function checkInput (numb) {
    numb = Number(numb);
    if (numb>randomNumber){
        range.innerText = min+"-"+numb;
        max = numb;
        
    }else if(numb<randomNumber){
        range.innerText = numb+"-"+max;
        min = numb;
    }else{
        body.style.backgroundImage = "url(./IMG/havai.gif)";
        // conteiner.style.display = "none";
        location.reload();
        window.alert("TEBRİKLER!!! GUESS NUMBER:"+numb)
    }
    //  console.log(typeof numb);
    
}
