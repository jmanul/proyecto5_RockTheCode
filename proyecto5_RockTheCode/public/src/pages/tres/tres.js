
import { createMessage } from '../../components/message/message';
import { ClearTime, createSection } from '../../components/section/section';

import './tres.css'

const colorRed = './src/assets/red.svg' ;
const colorYellow = './src/assets/yellow.svg'; 
export const nameRed = 'countRedTres';
export const nameYellow = 'countYellowTres';
export let turnPoint = nameRed;   
let turnColor = colorRed;
let countEndGame = 0;
let countRedTres = '0' + 0;
let countYellowTres = '0' + 0;
const combinations = [[0, 1, 2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [3, 4, 5], [0, 4, 8], [6, 4, 2], [1, 4, 7]];
let copyCombinations = []; 

export const setLocalstorage = (red, yellow) => {

     localStorage.setItem('pointRedTres', red);
     localStorage.setItem('pointYellowTres', yellow);
    
}

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
                    console.log(' coincide');
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

const printLocalStorage = () => {
     
     const gamerYellow = document.querySelector('#jugador-1');
    gamerYellow.innerHTML = localStorage.getItem('pointYellowTres');
          
     const gamerRed = document.querySelector('#jugador-2')
     gamerRed.innerHTML=localStorage.getItem('pointRedTres');
}

export const printPoint = () => {
     const containerGame = document.querySelector('.container-game');
     const gamerYellow = document.querySelector('#jugador-1');
     const gamerRed = document.querySelector('#jugador-2');
     const iconRed = document.querySelector('#iconJugador-2');
    
     if (turnPoint == nameYellow) {
          iconRed.classList.remove('icon-action');
          countYellowTres++;
          if (countYellowTres < 10) { countYellowTres = '0' + countYellowTres };

          gamerYellow.innerHTML = countYellowTres;
          createMessage(containerGame, 'Gano el jugador amarillo');
          ClearTime()
     
     } else if (turnPoint == nameRed) {
          iconRed.classList.remove('icon-action');
          countRedTres++;
          if (countRedTres < 10) { countRedTres = '0' + countRedTres };
        
          gamerRed.innerHTML = countRedTres;
          createMessage(containerGame, 'Gano el jugador rojo');
          ClearTime()

     }

     setLocalstorage(countRedTres, countYellowTres);
};

const comprobation = (numero) => { 
      
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
                              
                              printThree(i,turnPoint);
                              printPoint();
                         }
                    } 
  
               }
          }
     
     }
    
};

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

export const initPlay = (numero) => {
     
     const play = document.querySelector('#play');
     
     if (play.className !== 'play-start') {
         
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
     turnColor == colorRed ? turnPoint = nameRed : turnPoint = nameYellow;
     
     if (numberCasilla.className.includes('ocupada')) {
          
          return; 

     } else {
          
          numberCasilla.classList.add('ocupada');
          const ficha = document.createElement('img');
          ficha.src = turnColor;
          numberCasilla.append(ficha);
          comprobation(numero);
          countEndGame++;
          turnColorMarker();

     } 

     if (countEndGame == 9) {

          iconRed.classList.remove('icon-action');
          iconYellow.classList.remove('icon-action');
          
          setTimeout(() => {
              
               createMessage(containerGame,'termino la partida')
               ClearTime();
              
          }, 1000);   
     }
     
}

export const createTres = (button) => {
    
     countEndGame = 0;
     createSection(button, 'Tres en Raya', '1', 'pointRedTres', 'pointYellowTres');
     copyCombinations = JSON.parse(JSON.stringify(combinations));
    
     const containerGame = document.querySelector('.container-game');
     const tablero = document.createElement('div');
     tablero.className = 'tablero';
     containerGame.append(tablero);

     for (let i = 0; i < 9; i++) {

          const casilla = document.createElement('div');
          casilla.id = `casilla-${i}`;
          casilla.classList.add('flex-container', 'casilla');
          tablero.append(casilla);
          casilla.addEventListener('click', () => initPlay(i));
          
     }
     
     printLocalStorage();
     turnColorMarker();
       
}
