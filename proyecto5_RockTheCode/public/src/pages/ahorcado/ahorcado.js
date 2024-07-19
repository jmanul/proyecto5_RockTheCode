import { createSection } from '../../components/section/section'
import './ahorcado.css'

export const createAhorcado = (button,game) => {
     
     // initDate('pointRedTrivi', 'pointYellowTriv');
   
     createSection(button,game);
     const containerGame = document.querySelector('.container-game');
     containerGame.innerText = 'ahorcado';
}

