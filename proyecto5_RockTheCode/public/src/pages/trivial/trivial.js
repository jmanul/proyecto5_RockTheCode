import { createMessage } from '../../components/message/message';
import { ClearTime, createSection } from '../../components/section/section';
import { preguntasTrivial } from '../../data/data';
import { initDate, initPlay, printLocalStorage, turnColorMarker} from '../tres/tres';
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

let answerCorrect;

const resultAnswer = (answer) => {



     if (answer == answerCorrect) {

          console.log('es correcto'+ answerCorrect);

     } else {

          console.log('no es correcto' + answerCorrect);
     }

     countEndGame++;
     turnColorMarker();
}
export const roundQuestion = (numero, fin) => {

     
     const iconYellow = document.querySelector('#iconJugador-1');
     const iconRed = document.querySelector('#iconJugador-2');
     const tema = document.querySelector(`#tema-${numero}`);
     const text = document.querySelector('.text-question');
     const containerGame = document.querySelector('.container-game');

     if (tema.className.includes('answered')) {

          return;

     } else {

          turnColor == colorRed ? turnColor = colorYellow : turnColor = colorRed;
          turnColor == colorRed ? turnPoint = nameRed : turnPoint = nameYellow;

          tema.classList.add('answered');
          var x = Math.floor(Math.random() * 20);

          text.innerHTML = preguntasTrivial[numero].preguntas[x].pregunta;
          answerCorrect = preguntasTrivial[numero].preguntas[x].respuesta; 
         
     }

     if (countEndGame == fin) {

          setTimeout(() => {

               createMessage(containerGame, 'termino su turno')
               ClearTime();

          }, 1000);
     }


}

export const createTrivial = (button,game) => { 

     initDate('pointRedTrivi', 'pointYellowTrivi');
     countEndGame = 0;
     createSection(button,game);
     const containerGame = document.querySelector('.container-game');
    
     const tableroQuestions = document.createElement('div');
     tableroQuestions.classList.add('tablero-questions', 'flex-container');
     const containerAnswers = document.createElement('div');
     containerAnswers.classList.add('flex-container', 'container-answers');
     containerAnswers.innerHTML = `<form class="answer flex-container"> <input type="text" placeholder="respuesta" name="answer" id="answer"><button type="submit" id ="answerd-send"><img src="./src/assets/arrow.svg" alt="send"></button></form>`;
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
          temeQuestions.innerText = preguntasTrivial[i].name;
          tema.append(temeQuestions);
          tema.addEventListener('click', () => initPlay(button,i,4));
     }

     const question = document.createElement('div');
     question.classList.add('question');
     tableroQuestions.append(question);
     const textQuestion = document.createElement('p');
     textQuestion.className = 'text-question';
     question.append(textQuestion);

     const answerInput = document.querySelector('.answer')
     answerInput.addEventListener('submit', (e) => {

          e.preventDefault();
          resultAnswer(e.target.answer.value);
     });   
    
}