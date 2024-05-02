const btn1  = document.querySelector('#btn1');
const btn2  = document.querySelector('#btn2');
const out   = document.querySelector('#info');

function lightOn(){
    out.innerText = "Licht an";
    out.className = 'default-mode';
    //change la couleur des boutons avec this
    // this.innerText = "Licht an";
    // this.className = 'default-mode';
    console.log(lightOn)
}


function lightOff(){
    out.innerText = "Licht aus";
    out.className = "dark-mode";
     //change la couleur des boutons avec this
    // this.innerText = "Licht an";
    // this.className = 'default-mode';
    console.log(lightOff)

}

btn1.addEventListener('click',lightOn);
btn2.addEventListener('click',lightOff);