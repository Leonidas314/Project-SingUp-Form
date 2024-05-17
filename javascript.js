const imgId = ["img1","img2","img3","img4"];
var currentIndex = 0;
//var paraph = document.createElement('p');
//var frases = ["Sofware Engineering","Movile Apps","International","Work With us!"];

function changeanimation(){
    var imgSalida = document.getElementById(imgId[currentIndex])
    var imgEntrada = document.getElementById(imgId[currentIndex+1]);
    imgSalida.classList.toggle('animacionSalida');
    setTimeout(imgSalida.classList.toggle('hidden'), 5000);
    imgEntrada.classList.toggle('hidden');
    imgEntrada.classList.toggle('animacionEntrada');
    currentIndex = (currentIndex + 1) % imgId.length; // Avanzar al siguiente índice circularmente


}
function changeclass() {
}

