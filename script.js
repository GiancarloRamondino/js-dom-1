let immagine = document.getElementById('target');
let bottone = document.getElementById('btn');
function cambiaImmagine() {
    if (immagine.src.includes('img/yellow_lamp.png')) {
        immagine.src = './img/white_lamp.png';
    } else {
        immagine.src = './img/yellow_lamp.png';
    }
}
bottone.addEventListener('click', cambiaImmagine);
