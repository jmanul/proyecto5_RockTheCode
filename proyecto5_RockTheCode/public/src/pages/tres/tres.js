import { ClearTime, createSection } from '../../components/section/section';
import './tres.css'


const red = './src/assets/red.svg'; 
const yellow = './src/assets/yellow.svg';
let turn = './src/assets/red.svg'; 
let countEndGame = 0;

export const initPlay = (button, numero) => {

     
     const play = document.querySelector('#play');
     
     if (play.className !== 'play-start') {

          createTres(button);
          alert('pulsa play para empezar');
         
          return;

     } else if (play.className === 'play-start') {
          
          controlTurn(numero);
     }
 };

const controlTurn = (numero) => {


     countEndGame++;
     
     turn == red ? turn = yellow : turn = red;

     const numberCasilla = document.querySelector(`#casilla-${numero}`);
     
     if (numberCasilla.className.includes('ocupada')) {
          
          return; 

     } else {
          
          numberCasilla.classList.add('ocupada');
          const ficha = document.createElement('img');
          ficha.src = turn;
          numberCasilla.append(ficha);

     } 
     console.log(countEndGame);

     if (countEndGame == 9) {

          countEndGame = 0;
          
          setTimeout(() => {
              
               alert('termino la partida');
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
}
