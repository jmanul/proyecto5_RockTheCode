import { createMessage } from '../../components/message/message';
import { ClearTime, createSection } from '../../components/section/section';
import { preguntasTrivial } from '../../data/data';
import { initDate, initPlay, printLocalStorage, turnColorMarker } from '../tres/tres';
import './trivial.css'

const colorRed = './src/assets/red.svg';
const colorYellow = './src/assets/yellow.svg';
const nameRed = 'countRed';
const nameYellow = 'countYellow';
let turnPoint;
let turnColor;
let countRed;
let countYellow;
let localyellow;
let localred;

let answerCorrect;

const resultAnswer = (answer) => {

     const containerGame = document.querySelector('.container-game');

     let answerTransform = answer.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
     let answerCorrectTransform = answerCorrect.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

     if (answerTransform.toLowerCase() == answerCorrectTransform.toLowerCase()) {

          setTimeout(() => {

               createMessage(containerGame, `${answerCorrect} es correcto.😊`)
               ClearTime();

          }, 1000);

          console.log('es correcto' + answerCorrectTransform.toLowerCase());

     } else {

          setTimeout(() => {

               createMessage(containerGame, `${answer} no es correcto, la respuesta correcta es ${answerCorrect}. 😒`)
               ClearTime();

          }, 1000);

          console.log('no es correcto' + answerCorrect);
     }


}

export const roundQuestion = (numero, fin) => {

     const text = document.querySelector('.text-question');
     const tema = document.querySelector(`#tema-${numero}`);
     

     if (tema.className.includes('answered')) {

          return;

     } else {

          turnColor == colorRed ? turnColor = colorYellow : turnColor = colorRed;
          turnColor == colorRed ? turnPoint = nameRed : turnPoint = nameYellow;

          var x = Math.floor(Math.random() * 20);

          text.innerHTML = preguntasTrivial[numero].preguntas[x].pregunta;
          answerCorrect = preguntasTrivial[numero].preguntas[x].respuesta;

     }

}

export const createTrivial = (button, game) => {

     initDate('pointRedTrivi', 'pointYellowTrivi');

     createSection(button, game);
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
          tema.classList.add('flex-container', 'answered', 'tema', `tema-${i}`);
          containerTemes.append(tema);
          const temeQuestions = document.createElement('p');
          temeQuestions.innerText = preguntasTrivial[i].name;
          tema.append(temeQuestions);
          tema.addEventListener('click', () => initPlay(button, i, 4));
     }
     var y = Math.floor(Math.random() * 4);
     const temas = document.querySelectorAll('.tema');
     temas[y].classList.remove('answered');

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