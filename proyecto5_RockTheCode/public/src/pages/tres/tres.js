import { createSection } from '../../components/section/section';
import './tres.css'

export const createTres = (button) => {

     createSection(button,'Tres en Raya', '1');
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'Tres en Raya';
}
