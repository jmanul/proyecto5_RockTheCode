import { createSection } from '../../components/section/section';
import { countEndGame, initDate, printLocalStorage } from '../tres/tres';
import './trivial.css'

export const createTrivial = (button,game) => { 

     initDate('pointRedTrivi', 'pointYellowTriv');

     createSection(button,game);
     const containerGame = document.querySelector('.container-game');
    
     const tableroAnswers = document.createElement('div');
     tableroAnswers.className = 'tableroAnswers';
     const questions = document.createElement('div');
     questions.className = 'questions';
     containerGame.append(tableroAnswers, questions);
     
     printLocalStorage();
}