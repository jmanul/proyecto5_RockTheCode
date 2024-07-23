import { createMessage } from '../../components/message/message';
import { ClearTime} from '../../components/section/section';
import { preguntasTrivial } from '../../data/data';
import {initPlay} from '../tres/tres';
import './trivial.css'

let countGamer = 0;
let answerCorrect;

let countRed;
let countYellow;
let localYellow;
let localRed;


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

export const turnGamer = () => {

      const iconYellow = document.querySelector('#iconJugador-1');
     const iconRed = document.querySelector('#iconJugador-2');
    
     if (countGamer%2 == 0) {

           iconRed.classList.remove('icon-action');
          iconYellow.classList.add('icon-action');

     } else {
           
          iconYellow.classList.remove('icon-action');
          iconRed.classList.add('icon-action');

     }

     ClearTime()

}

const addPoint = () => {
      
     const gamerYellow = document.querySelector('#jugador-1');
     const gamerRed = document.querySelector('#jugador-2');

     if (countGamer % 2 == 0) {

          countYellow++;
          if (countYellow < 10) { countYellow = '0' + countYellow };

          gamerYellow.innerHTML = countYellow;


     } else {

          countRed++;
          if (countRed < 10) { countRed = '0' + countRed };

          gamerRed.innerHTML = countRed;

     }

     ClearTime()

     setLocalstorage('pointRedTrivi', 'pointYellowTrivi');
     initDate('pointRedTrivi', 'pointYellowTrivi');

}

const resultAnswer = (answer) => {

     const containerGame = document.querySelector('.container-game');

     let answerTransform = answer.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
     let answerCorrectTransform = answerCorrect.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

     if (answerTransform.toLowerCase() == answerCorrectTransform.toLowerCase()) {


          setTimeout(() => {

               createMessage(containerGame, `${answerCorrect} es correcto.😊`)
               ClearTime();

          }, 1000);

          addPoint();

     } else {

          setTimeout(() => {

               createMessage(containerGame, `${answer} no es correcto, la respuesta correcta es ${answerCorrect}. 😒`)
               ClearTime();

          }, 1000);

   
     }
  
     const answerbutton = document.querySelector('#answer-send');
     answerbutton.style.pointerEvents = 'none';

      countGamer++;
      turnGamer();
}

export const roundQuestion = (numero) => {

     const text = document.querySelector('.text-question');
     const tema = document.querySelector(`#tema-${numero}`);
     

     if (tema.className.includes('answered')) {

          return;

     } else {

          let x = Math.floor(Math.random() * preguntasTrivial[numero].preguntas.length);

          text.innerHTML = preguntasTrivial[numero].preguntas[x].pregunta;
          answerCorrect = preguntasTrivial[numero].preguntas[x].respuesta;

     }

}

export const createTrivial = (button) => {

     initDate('pointRedTrivi', 'pointYellowTrivi');

     const containerGame = document.querySelector('.container-game');
     containerGame.innerHTML = '';
     const tableroQuestions = document.createElement('div');
     tableroQuestions.classList.add('tablero-questions', 'flex-container');
     const containerAnswers = document.createElement('div');
     containerAnswers.classList.add('flex-container', 'container-answers');
     containerAnswers.innerHTML = `<form class="answer flex-container"> <input type="text" placeholder="respuesta" name="answer" id="answer"><button type="submit" id ="answer-send"><img src="./src/assets/arrow.svg" alt="send"></button></form>`;
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
          tema.addEventListener('click', () => initPlay(button, i, 1));
     }
     let y = Math.floor(Math.random() * preguntasTrivial.length);
     const temas = document.querySelectorAll('.tema');
     temas[y].classList.remove('answered');

     const question = document.createElement('div');
     question.classList.add('question');
     tableroQuestions.append(question);
     const textQuestion = document.createElement('p');
     textQuestion.className = 'text-question';
     question.append(textQuestion);

     const answerInput = document.querySelector('.answer');
     answerInput.addEventListener('submit', (e) => {

          e.preventDefault();

          if (e.target.answer.value == '') {
               
               return;

          } else {
              
               resultAnswer(e.target.answer.value);
          }
        
         
     });
     
     ClearTime();
     turnGamer();
}