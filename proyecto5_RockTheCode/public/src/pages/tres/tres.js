import { createSection } from '../../components/section/section';
import './tres.css'

const control = (numero) => {

     const numberCasilla = document.querySelector(`#casilla-${numero}`);
     
     if (numberCasilla.className.includes('ocupada')) {
          
          console.log(classList);
          return; 

     } else {
          
          numberCasilla.classList.add('ocupada');
          const ficha = document.createElement('img');
          ficha.src = './src/assets/yellow.svg';
          numberCasilla.append(ficha);

     }
     

     
}

export const createTres = (button) => {

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
          casilla.addEventListener('click', () => control(i));
          
     }
}
