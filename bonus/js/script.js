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
//! Levo il const alle variabili boxRows e boxCols
let boxRows;
let boxCols;
//! Targhettizzo il value del select
const difficultySelect = document.getElementById('difficulty');
let difficultyChoice;

// Creo una funzione che mi permetta di creare un div con classe cell
const createCell = content => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    
    //* MILESTONE 3
    // In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100
    cell.innerText = content;
    
    return cell;
}

// Uso il metodo addEeventListener per generate tot celle al click del bottone play
playButton.addEventListener('click', function(){
    
    // Svuoto il box
    boxElement.innerHTML = '';
    
    //! Aggiungo l'istruzione if per modificare il numero di boxRows e boxCols in base alla difficoltà scelta dell'utente
    difficultyChoice = difficultySelect.value; // Al click, vedo il valore scelto dall'utente
    if (difficultyChoice === 'easy'){
        boxRows = 10;
        boxCols = 10;
    } else if (difficultyChoice === 'medium'){
        boxRows = 9;
        boxCols = 9;
    } else {
        boxRows = 7;
        boxCols = 7;
    }

    // Riempio il box con le nuove celle
    for (let i = 1; i <= boxRows * boxCols; i++){
        cell = createCell(i);
        //! Aggiungo l'istruzione if per modificare il le dimensioni delle celle in base alla difficoltà scelta dell'utente (aggiungendo la classe css giusta)
        if (difficultyChoice === 'medium'){
            cell.classList.add('medium');
        } else if (difficultyChoice === 'hard'){
            cell.classList.add('hard');
        }
        
        boxElement.appendChild(cell);
        
        //* MILESTONE 4
        // Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
        cell.addEventListener('click', function (){
            this.classList.toggle('active');
            console.log(this.innerText);
        });
    }

    // Cambio il testo del bottone in ricomincia (solo prima partita)
    if (this.innerText === 'Gioca') this.innerText = 'Ricomincia';
});

//! BONUS

/*
1. Levo il const alle variabili boxRows e boxCols
2. Targhettizzo il value del select
3. Aggiungo l'istruzione if per modificare il numero di boxRows e boxCols in base alla difficoltà scelta dell'utente
4. Aggiungo l'istruzione if per modificare il le dimensioni delle celle in base alla difficoltà scelta dell'utente (aggiungendo la classe css giusta)
*/