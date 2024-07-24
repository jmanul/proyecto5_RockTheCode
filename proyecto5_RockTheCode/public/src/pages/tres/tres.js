
import { createMessage } from '../../components/message/message';
import { ClearTime} from '../../components/section/section';

import { roundQuestion } from '../trivial/trivial';

import './tres.css';

const colorRed = './src/assets/red.svg';
const colorYellow = './src/assets/yellow.svg';
const nameRed = 'countRed';
const nameYellow = 'countYellow';
let turnPoint = nameRed;
let turnColor = colorRed;
let countEndGame = 0;


const itemsLocal = {

     countRed: 0,
     countYellow: 0,
     localYellow: 0,
     localRed: 0
};

let { countRed, countYellow, localRed, localYellow } = itemsLocal;

const combinations = [[0, 1, 2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [3, 4, 5], [0, 4, 8], [6, 4, 2], [1, 4, 7]];

let copyCombinations = [];

//? inicio de datos en memoria local

const initDate = (red, yellow) => {

     localRed = localStorage.getItem(red);
     localYellow = localStorage.getItem(yellow);

     if (localRed) {
          countRed = localRed;
     } else {

          countRed = '0' + 0;
     }
     if (localYellow) {

          countYellow = localYellow;

     } else {

          countYellow = '0' + 0;
     }

}

const setLocalstorage = (red, yellow) => {

     localStorage.setItem(red, countRed);
     localStorage.setItem(yellow, countYellow);

}

const printLocalStorage = () => {

     document.querySelector('#jugador-1').innerHTML = countYellow;

     document.querySelector('#jugador-2').innerHTML = countRed;
}

export const deleteLocalStore = (red, yellow) => {

     localStorage.removeItem(red);
     localStorage.removeItem(yellow);
}

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

//? se busca ganador 

export const searchWinner = (red, yellow) => {
    

     const gamerYellow = document.querySelector('#jugador-1');
     const gamerRed = document.querySelector('#jugador-2');

     if (turnPoint == nameYellow) {
        
          countYellow++;
          if (countYellow < 10) { countYellow = '0' + countYellow };

          gamerYellow.innerHTML = countYellow;

     } else if (turnPoint == nameRed) {
         
          countRed++;
          if (countRed < 10) { countRed = '0' + countRed };

          gamerRed.innerHTML = countRed;

     }

     ClearTime()
   
     setLocalstorage(red, yellow);
     initDate(red, yellow);
    
};


//? se comprueba si hay ganador 

const comprobation = (numero) => { 
     
     const containerGame = document.querySelector('.container-game');

     for (let i = 0; i < copyCombinations.length; i++) { 
          let combination = copyCombinations[i];
         
          let count = 0;

          for (let y = 0; y < combination.length; y++) {
               
               let numberCasilla = combination[y];

               if (numberCasilla == numero) {
                     
                    combination.splice(y,1, turnPoint);
                       
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
                              
                              printThree(i,turnPoint);
                          searchWinner('pointRedTres', 'pointYellowTres');
                         }
                    } 
  
               }
          }
     
     }
    
};

//? se cambia el color del jugador

export const turnColorMarker = () => {

     const iconYellow = document.querySelector('#iconJugador-1');
     const iconRed = document.querySelector('#iconJugador-2');
     
     if (turnColor == colorRed) {
     
          iconRed.classList.remove('icon-action');
          iconYellow.classList.add('icon-action');
        
     } else if (turnColor == colorYellow) {

          iconYellow.classList.remove('icon-action');
          iconRed.classList.add('icon-action');

     }  
     
}

//? inicio del juego comprobando si se ha iniciado el tiempo

export const initPlay = (button ,numero, fin) => {
     
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

export const selectGame = (button ,numero, fin) => {
     
     if (button == 'tres-en-raya') {
       
          controlturnColor(numero, fin);

          
     } else if (button == 'trivial') {

          roundQuestion(numero); 
           
     }
}
 

//? comprobamos si una casilla esta ocupada, el color de la ficha y el fin del juego

const controlturnColor = (numero, fin) => {

     const numberCasilla = document.querySelector(`#casilla-${numero}`);
     const containerGame = document.querySelector('.container-game');
     
     if (numberCasilla.className.includes('ocupada')) {
          
          return; 

     } else {

          turnColor == colorRed ? turnColor = colorYellow : turnColor = colorRed;
          turnColor == colorRed ? turnPoint = nameRed : turnPoint = nameYellow;
          
          numberCasilla.classList.add('ocupada');
          const ficha = document.createElement('img');
          ficha.src = turnColor;
          numberCasilla.append(ficha);
          comprobation(numero);
          countEndGame++;
          turnColorMarker();

     } 

     if (countEndGame == fin) {
          
          setTimeout(() => {
              
               createMessage(containerGame,'termino la partida')
               ClearTime();
              
          }, 1000);   
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
     turnColorMarker();

}
         


 