const headersDiv = document.getElementById('headers')
const spech = document.getElementById('spech')
var headerChild = document.querySelector('p')
var currentIndex = 0;
var frases = ["Software Engineering","Movile Apps","International","Work With us!"];


headerChild.classList.toggle('visible');
console.time('Intervalo');
console.time('disApear')

function changeText(){
    console.timeLog('Intervalo')
    setTimeout(headerChild.innerText="",2000)
    var nodoTexto = document.createTextNode(frases[currentIndex]);
    console.log(frases[currentIndex])
    headerChild.appendChild(nodoTexto);
    currentIndex = (currentIndex + 1) % frases.length;//[0..3]

}
function disApear(){
    spech.classList.toggle('visible')
    spech.classList.toggle('fade-in-text');//Desaparece, en 2 segundos
}
function apear(){
    spech.classList.toggle('visible')
}

function efectApear(){
    apear();
    setTimeout(disApear,2000)
}
changeText();
setInterval(changeText,8000);
setInterval(efectApear,4000)
