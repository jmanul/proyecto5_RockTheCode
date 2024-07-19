import { createSection } from '../../components/section/section';
import { initDate, initPlay, printLocalStorage } from '../tres/tres';
import './trivial.css'

export const createTrivial = (button,game) => { 
 
     initDate('pointRedTrivi', 'pointYellowTriv');

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

          const casilla = document.createElement('div');
          casilla.id = `casilla-${i}`;
          casilla.classList.add('flex-container', 'casilla', `casilla-${i}`);
          containerTemes.append(casilla);
          const temeQuestions = document.createElement('p');
          temeQuestions.innerText = 'pregunta';
          casilla.append(temeQuestions);
          casilla.addEventListener('click', () => initPlay(i,6));
     }

     const question = document.createElement('div');
     question.classList.add('question');
     tableroQuestions.append(question);
     const textQuestion = document.createElement('p');
     question.append(textQuestion);
}