import { createSection } from '../../components/section/section'
import './ahorcado.css'

export const createAhorcado = () => {

     createSection('Ahorcado');
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'ahorcado';
}

