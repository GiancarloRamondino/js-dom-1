let immagine = document.getElementById('target');
let bottone = document.getElementById('btn');
function cambiaImmagine() {
    if (immagine.src.includes('img/yellow_lamp.png')) {
        immagine.src = './img/white_lamp.png';
        immagine.classList.remove('regolazione'); // rimuove la classe
    } else {
        immagine.src = './img/yellow_lamp.png';
        immagine.classList.add('regolazione'); //aggiunge la classe
    }

}
bottone.addEventListener('click', cambiaImmagine);

function cambiaColore() {
    console.log('cambia colore');
    bottone.classList.add('colore');
}
function cambiaColore1() {
    bottone.classList.remove('colore');
    
}

bottone.addEventListener('mouseup', cambiaColore);
bottone.addEventListener('mousedown', cambiaColore1);

