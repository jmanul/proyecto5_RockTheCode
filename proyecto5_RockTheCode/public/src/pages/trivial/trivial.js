import { createSection } from '../../components/section/section';
import './trivial.css'

export const createTrivial = (button) => {

     createSection(button,'Trivial', '1');
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'Trivial';
}