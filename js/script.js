// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


//in base alla scelta del select, al click di button dovrà partire il gioco corrispondente
//
//

const playButton = document.getElementById('play_button')
let gameDifficult = '';


playButton.addEventListener('click', playThisDifficulty);
    


let myGrid = document.getElementById('grid');
myGrid.innerHTML = '';


let thisDifficult = squareNumbersGenerator(gameDifficult);

for(let i = 0; i < thisDifficult.length; i++) {
    const thisNumber = thisDifficult[i];
    const newSquareGenerated = itemGenerator(thisNumber);

    newSquareGenerated.addEventListener('click', squareOnClick);

    myGrid.appendChild(newSquareGenerated);
}






//FUNCTIONS


function playThisDifficulty () {
    let myGrid = document.getElementById('grid');
    myGrid.innerHTML = '';
    const easy = 'easy';
    const hard = 'hard';
    const crazy = 'crazy';
    const difficultyEasy = 100;
    const difficultyHard = 81;
    const difficultyCrazy = 49;
    let gameDifficult = document.getElementById('game_difficult').value;
    console.log(gameDifficult)
    if (gameDifficult == easy) {
        gameDifficult = difficultyEasy;
    } else if (gameDifficult == hard) {
        gameDifficult = difficultyHard;
    } else if (gameDifficult == crazy) {
        gameDifficult = difficultyCrazy;
    }

    let thisDifficult = squareNumbersGenerator(gameDifficult);

    for(let i = 0; i < thisDifficult.length; i++) {
    const thisNumber = thisDifficult[i];
    const newSquareGenerated = itemGenerator(thisNumber);
    

    if (gameDifficult == difficultyEasy) {
        newSquareGenerated.classList.add('square_10');
    } else if (gameDifficult == difficultyHard) {
        newSquareGenerated.classList.add('square_9');
    } else if (gameDifficult == difficultyCrazy) {
        newSquareGenerated.classList.add('square_7');
    }



    newSquareGenerated.addEventListener('click', squareOnClick);

    myGrid.appendChild(newSquareGenerated);
    }

    return gameDifficult;
}


/////////////////////////////////////////////////////////////////////////////////////


function squareOnClick() {
    this.classList.add('active');
}


/////////////////////////////////////////////////////////////////////////////////////


function itemGenerator (number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square')
    newSquare.classList.add('square_7')
    newSquare.innerHTML = `<span>${number}</span>`;
    return newSquare;
}




// function itemGenerator (number) {
//     const newSquare = document.createElement('div');
//     newSquare.classList.add('square')
    
//     if (gameDifficult === easy) {
//         newSquare.classList.add('square_10');
//     } else if (gameDifficult === hard) {
//         newSquare.classList.add('square_9');
//     } else if (gameDifficult === crazy) {
//         newSquare.classList.add('square_7');
//     }
//     newSquare.innerHTML = `<span>${number}</span>`;
//     return newSquare;
// }


////////////////////////////////////////////////////////////////////////////////////////


//FUNZIONE che genera numeri non ripetuti fino ad un numero dato
//creo un array vuoto dove andare ad inserire i numeri fino al valore indicato

//il valore di gameDifficult deve essere un numero intero

//return darà come risultato il totale di numeri richiesti NON ripetuti

function squareNumbersGenerator(gameDifficult) {
    let myNumbersArray = [];

    
    //per ogni ciclo pusho un numero nell'array fino al valore indicato in gameDifficult
    for (let i = 1; i <= gameDifficult; i++) {
        let thisNumber = [i];
        myNumbersArray.push(thisNumber);
    }

    // while ( myNumbersArray.length < gameDifficult) {
    //     const thisNumber = getRndInteger(1, gameDifficult)
        
    //     if ( !myNumbersArray.includes( thisNumber ) ) {
    //         myNumbersArray.push(thisNumber);
    //     }
    // }
    // myNumbersArray.sort( function (a, b) {
    //     return a - b;
    // })
    
    return myNumbersArray;
}
/////////////////////////////////////////////////////////////////////////////////////////



//funzione che genera numeri casuali da min a max, compresi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
