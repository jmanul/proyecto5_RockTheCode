import { createSection } from '../../components/section/section';
import './trivial.css'

export const createTrivial = () => {

     createSection('Trivial');
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'Trivial';
}