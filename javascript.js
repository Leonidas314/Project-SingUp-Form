const headersDiv = document.getElementById('headers')
const spech = document.getElementById('spech')
var headerChild = document.querySelector('.hParaph')//Porque es document?
var spechChild = document.querySelector('.fParaph')//Puede ser Child?
var currentIndex = 0;
var frases = ["Software Engineering","Movile Apps","International","Work With us!"]; 
var speches = ["Working with high qualify professionals in software development","Responsive design for your apps, websites and movile games to!","Client satified all over the world, remote working with clients and partners", "Do you have any skill? Our teams are constanly growing! Send us a mesage"]

headerChild.classList.toggle('visible');
console.time('Intervalo');
console.time('disApear')

function changeText(){
    console.timeLog('Intervalo')
    setTimeout(headerChild.innerText="",2000)
    setTimeout(spechChild.innerText="",2000)

    var nodoHeader = document.createTextNode(frases[currentIndex]);
    var nodoSpech = document.createTextNode(speches[currentIndex])
    console.log(frases[currentIndex])
    headerChild.appendChild(nodoHeader);
    spechChild.appendChild(nodoSpech)
    currentIndex = (currentIndex + 1) % frases.length;//[0..3]

}
function disApear(){    
    headersDiv.classList.toggle('visible')
    spech.classList.toggle('visible')
    headersDiv.classList.toggle('fade-in-text');//Desaparece, en 2 segundos
    spech.classList.toggle('fade-in-text');//Desaparece, en 2 segundos
}
function apear(){
    headersDiv.classList.toggle('visible')
    spech.classList.toggle('visible')
}

function efectApear(){
    apear();
    setTimeout(disApear,2000)
}
changeText();
setInterval(changeText,8000);
setInterval(efectApear,4000)
