import { createSection } from '../../components/section/section'
import './ahorcado.css'

export const createAhorcado = (button) => {

     createSection(button,'Ahorcado', '3');
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'ahorcado';
}

