//* MILESTONE 2

/*
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
*/

//* Procedimento step-by-step

/*
1. Dichiaro le variabili globali: play button, #box, numero di righe e colonne
2. Creo una funzione che mi permetta di creare un numero ben definito di celle secondo il quantitativo di righe e colonne
3. Uso il metodo addEeventListener per generate le celle al click del bottone play
*/

// Dichiaro le variabili globali
const playButton = document.getElementById('play-button');
const boxElement = document.getElementById('box');
let grid;
const boxRows = 10;
const boxCols = 10;

// Creo una funzione che mi permetta di creare un numero ben definito di celle secondo il quantitativo di righe e colonne
const createGrid = (rows, cols) => {
    let grid = '';
    for (let i = 0; i < rows * cols; i++){
        grid += `<div class="cell"></div>`;
    }
    return grid;
}

// Uso il metodo addEeventListener per generate le celle al click del bottone play
playButton.addEventListener('click', function(){
    grid = createGrid (boxRows, boxCols);
    boxElement.innerHTML = grid;
});