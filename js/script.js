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
let cell;
const boxRows = 10;
const boxCols = 10;

// Creo una funzione che mi permetta di creare un div con classe cell
const createCell = content => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.number = content;
    //* MILESTONE 3
    cell.innerText = content;
    return cell;
}

// Uso il metodo addEeventListener per generate tot celle al click del bottone play
playButton.addEventListener('click', function(){
    for (let i = 1; i <= boxRows * boxCols; i++){
        cell = createCell(i);
        boxElement.appendChild(cell);
    }
});