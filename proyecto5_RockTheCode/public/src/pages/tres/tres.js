
import { createMessage } from '../../components/message/message';
import { ClearTime, createSection } from '../../components/section/section';

import './tres.css'

const colorRed = './src/assets/red.svg' ;
const colorYellow = './src/assets/yellow.svg'; 
export const nameRed = 'red';
export const nameYellow = 'yellow';
export let turnPoint = nameRed;   
let turnColor = colorRed;
let countEndGame = 0;

const gameryellow = document.querySelector('#jugador-1');
const gamerRed = document.querySelector('#jugador-2');



export const turnColorMarker = () => {

     const iconYellow = document.querySelector('#iconJugador-1');
     const iconRed = document.querySelector('#iconJugador-2');

     if (turnColor == colorRed) {

          turnPoint = nameRed;
     
          iconRed.classList.remove('icon-action');
          iconYellow.classList.add('icon-action');
        

     } else if (turnColor == colorYellow) {

          turnPoint = nameYellow;

          iconYellow.classList.remove('icon-action');
          iconRed.classList.add('icon-action');

     }
     
}


export const initPlay = (button, numero) => {
     
     const play = document.querySelector('#play');
     
     if (play.className !== 'play-start') {
          // createTres(button);
          const section = document.querySelector('section')
          createMessage(section, 'pulsa play para empezar')
          
          return;

     } else if (play.className === 'play-start') {
          
          controlturnColor(numero);
     }
 };

const controlturnColor = (numero) => {

     const numberCasilla = document.querySelector(`#casilla-${numero}`);
     const containerGame = document.querySelector('.container-game');
     const iconYellow = document.querySelector('#iconJugador-1');
     const iconRed = document.querySelector('#iconJugador-2');
     turnColor == colorRed ? turnColor = colorYellow : turnColor = colorRed;

     if (numberCasilla.className.includes('ocupada')) {
          
          return; 

     } else {
          
          numberCasilla.classList.add('ocupada');
          const ficha = document.createElement('img');
          ficha.src = turnColor;
          numberCasilla.append(ficha);

          countEndGame++;
          turnColorMarker();

     } 

     if (countEndGame == 9) {

          iconRed.classList.remove('icon-action');
          iconYellow.classList.remove('icon-action');

          countEndGame = 0;
          
          setTimeout(() => {
              
               createMessage(containerGame,'termino la partida')
               ClearTime();
              
          }, 1000);
         
          
     }
     
}

export const createTres = (button) => {
     
     countEndGame = 0;
     createSection(button,'Tres en Raya', '1');
     const containerGame = document.querySelector('.container-game');
     const tablero = document.createElement('div');
     tablero.className = 'tablero';
     containerGame.append(tablero);

     for (let i = 0; i < 9; i++) {

          const casilla = document.createElement('div');
          casilla.id = `casilla-${i}`;
          casilla.classList.add('flex-container', 'casilla');
          tablero.append(casilla);
          casilla.addEventListener('click', () => initPlay(button, i));
          
     }

     turnColorMarker();
}
