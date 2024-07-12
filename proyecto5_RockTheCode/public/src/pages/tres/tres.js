import { createSection } from '../../components/section/section';
import './tres.css'

export const createTres = () => {

     createSection('Tres en Raya');
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'Tres en Raya';
}
