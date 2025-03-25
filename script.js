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

onclick = bottone.click('color')
 function cambiaColore() {
    console.log('cambia colore');
    immagine.classList.add('colore');
 }
