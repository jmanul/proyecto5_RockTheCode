
import { createMessage } from '../../components/message/message';
import { ClearTime} from '../../components/section/section';

import { addPoint, initDate, printLocalStorage, roundQuestion, turnGamer } from '../trivial/trivial';

import './tres.css';

const colorRed = './src/assets/red.svg';
const colorYellow = './src/assets/yellow.svg';
const nameRed = 'countRed';
const nameYellow = 'countYellow';
let turnPoint = nameYellow;
let turnColor = colorYellow;
let countEndGame = 0;
let countGamer = 0;

const combinations = [[0, 1, 2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [3, 4, 5], [0, 4, 8], [6, 4, 2], [1, 4, 7]];

let copyCombinations = [];


//? se pinta el resultado ganador en el tablero

const printThree = (posit,color) => {

     const tablero = document.querySelector('.tablero');
     tablero.innerHTML = '';

     for (let i = 0; i < 9; i++) {

          const casilla = document.createElement('div');
          casilla.id = `casilla-${i}`;
          casilla.classList.add('flex-container', 'casilla');
          tablero.append(casilla);
          casilla.style.borderRadius = `var(--xl)`;
          casilla.style.background = `var(--grey)`;
          combinations[posit].forEach((item) => {
           
               if (item == i) {
                   
                    const ficha = document.createElement('img');
                    color == nameRed ? ficha.src = colorRed : ficha.src = colorYellow;
                    casilla.append(ficha);
                    casilla.style.background = `var(--dark-grey)`;
                    ficha.style.width = '70%';
                    ficha.style.height = '70%';

               }

          });

     }  
}

//? se comprueba si hay ganador 

const comprobation = (numero) => {

     const containerGame = document.querySelector('.container-game');

     for (let i = 0; i < copyCombinations.length; i++) {
          let combination = copyCombinations[i];

          let count = 0;

          for (let y = 0; y < combination.length; y++) {

               let numberCasilla = combination[y];

               if (numberCasilla == numero) {

                    combination.splice(y, 1, turnPoint);

                    for (let x = 0; x < combination.length; x++) {

                         let element = combination[x];
                         if (element == turnPoint) {

                              count++;
                         }
                         if (count == 3) {

                              if (turnPoint == nameYellow) {

                                   createMessage(containerGame, 'Gano el jugador amarillo');


                              } else if (turnPoint == nameRed) {

                                   createMessage(containerGame, 'Gano el jugador rojo');

                              }
                              printThree(i, turnPoint);
                              addPoint(countGamer, 'pointRedTres', 'pointYellowTres');
                             
                         }
                    }

               }
          }

     }

     turnColor == colorRed ? turnColor = colorYellow : turnColor = colorRed;
     turnColor == colorRed ? turnPoint = nameRed : turnPoint = nameYellow;

     countEndGame++;
     countGamer++;
     turnGamer(countGamer);


};


//? comienzo del juego comprobando si se ha iniciado el tiempo

export const initPlay = (button, numero, fin) => {

     const play = document.querySelector('#play');

     if (play.className !== 'play-start') {

          const section = document.querySelector('section')
          createMessage(section, 'pulsa play para empezar')

          return;

     } else if (play.className === 'play-start') {


          selectGame(button, numero, fin);

     }
};

//? llamamos a la funcion que inicia el juego en el que estemos jugando

export const selectGame = (button, numero, fin) => {

     if (button == 'tres-en-raya') {

          controlturnColor(numero, fin);


     } else if (button == 'trivial') {

          roundQuestion(numero);

     }
}


//? comprobamos si una casilla esta ocupada, el color de la ficha y el fin del juego

const controlturnColor = (numero, fin) => {

     const numberCasilla = document.querySelector(`#casilla-${numero}`);

     if (numberCasilla.className.includes('ocupada')) {

          return;

     } else {

          numberCasilla.classList.add('ocupada');
          const ficha = document.createElement('img');
          ficha.src = turnColor;
          numberCasilla.append(ficha);
          comprobation(numero);
        
     }

     if (countEndGame == fin) {

          ClearTime()
  
     }


}

export const createTres = (button) => {

     initDate('pointRedTres', 'pointYellowTres');

     countEndGame = 0;

     copyCombinations = structuredClone(combinations);

     const containerGame = document.querySelector('.container-game');
     containerGame.innerHTML = '';
     const tablero = document.createElement('div');
     tablero.className = 'tablero';
     containerGame.append(tablero);

     printLocalStorage();

     for (let i = 0; i < 9; i++) {

          const casilla = document.createElement('div');
          casilla.id = `casilla-${i}`;
          casilla.classList.add('flex-container', 'casilla');
          tablero.append(casilla);
          casilla.addEventListener('click', () => initPlay(button, i, 9));

     }

     turnGamer(countGamer);

}






 