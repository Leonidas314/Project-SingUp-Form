var imgDiv = document.getElementById('images');
const imagesFolder = '/images'
const imgNames = ["img1","img2","img3","img4"];

var currentIndex = 0;
var paraph = document.createElement('p');

imgDiv.classList.toggle('animacion');

var frases = ["Sofware Engineering","Movile Apps","International","Work With us!"];

function changeclass() {
    imgDiv.classList.remove(imgNames[currentIndex]);
    imgDiv.classList.toggle('animacion');
    imgDiv.classList.toggle('animacion');
    newText = document.createTextNode(frases[currentIndex]);
    paraph.appendChild(newText);
    imgDiv.appendChild(newText);
    currentIndex = (currentIndex + 1) % imgNames.length; // Avanzar al siguiente índice circularmente
    imgDiv.classList.add(imgNames[currentIndex]);
    //setTimeout(imgDiv.innerText="",10000)
}

setInterval(changeclass,5000)