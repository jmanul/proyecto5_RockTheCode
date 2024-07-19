import { createMessage } from '../../components/message/message';
import { ClearTime, createSection } from '../../components/section/section';
import { initDate, initPlay, printLocalStorage, turnColorMarker } from '../tres/tres';
import './trivial.css'

const colorRed = './src/assets/red.svg';
const colorYellow = './src/assets/yellow.svg';
const nameRed = 'countRed';
const nameYellow = 'countYellow';
let turnPoint = nameRed;
let turnColor = colorRed;
let countEndGame = 0;
let countRed;
let countYellow;
let localyellow;
let localred;

export const roundQuestion = (numero, fin) => {

     const tema = document.querySelector(`#tema-${numero}`);
     const question = document.querySelector('.question');
     const text = document.querySelector('.text-question');
     const containerGame = document.querySelector('.container-game');
     const iconYellow = document.querySelector('#iconJugador-1');
     const iconRed = document.querySelector('#iconJugador-2');

     if (tema.className.includes('answered')) {

          return;

     } else {

          tema.classList.add('answered');
          text.innerHTML = 'pregunta';

          countEndGame++;

     }

     if (countEndGame == fin) {

          iconRed.classList.toggle('icon-action');
          iconYellow.classList.toggle('icon-action');

          // turnColor == nameRed ? turnColor = colorYellow : turnColor = colorRed;
          // turnColor == colorRed ? turnPoint = nameRed : turnPoint = nameYellow;

          // turnColorMarker();

          setTimeout(() => {

               createMessage(containerGame, 'termino su turno')
               ClearTime();

          }, 1000);
     }


}

export const createTrivial = (button,game) => { 
 
     initDate('pointRedTrivi', 'pointYellowTrivi');

     createSection(button,game);
     const containerGame = document.querySelector('.container-game');
    
     const tableroQuestions = document.createElement('div');
     tableroQuestions.classList.add('tablero-questions', 'flex-container');
     const containerAnswers = document.createElement('div');
     containerAnswers.classList.add('flex-container', 'container-answers');
     containerAnswers.innerHTML = `<div class="answer flex-container">
  <input type="text" placeholder="respuesta" name="answer" id="answer"><button type="submit"><img src="./src/assets/arrow.svg" alt="send"></button>
</div>`;
     containerGame.append(tableroQuestions, containerAnswers);
     const containerTemes = document.createElement('div');
     containerTemes.classList.add('container-temes');
     tableroQuestions.append(containerTemes);
     
     printLocalStorage();

     for (let i = 0; i < 4; i++) {

          const tema = document.createElement('div');
          tema.id = `tema-${i}`;
          tema.classList.add('flex-container', 'tema', `tema-${i}`);
          containerTemes.append(tema);
          const temeQuestions = document.createElement('p');
          temeQuestions.innerText = 'pregunta';
          tema.append(temeQuestions);
          tema.addEventListener('click', () => initPlay(button,i,4));
     }

     const question = document.createElement('div');
     question.classList.add('question');
     tableroQuestions.append(question);
     const textQuestion = document.createElement('p');
     textQuestion.className = 'text-question';
     question.append(textQuestion);
}