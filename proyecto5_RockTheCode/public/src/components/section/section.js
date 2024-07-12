import { init } from '../../../../main';
import { menu } from '../../data/data';
import { createList } from '../list/list';
import { createLogo } from '../logo/logo';

import './section.css';

export const createSection = (name) => {

     const header = document.querySelector('header');
     header.innerHTML = '';
     createLogo(header, './src/assets/icon.svg', 'logo-header');
     const logoInicio = document.querySelector('#logo-header');
     createList(header, menu, 'menu-header'); 
     const main = document.querySelector('main');
     main.innerHTML = '';

     const title = document.createElement('h2');
     title.innerText = name;
     main.append(title);
   
     const section = document.createElement('section');
     section.classList.add('flex-container');
     main.append(section);
   
     const divMarcador = document.createElement('div');
     divMarcador.classList.add('flex-container' , 'marcadores');
     divMarcador.innerHTML = `<div class = "jugadores "><span><img src="./src/assets/gamer1.svg" alt="jugador 1"></span> <p class="jugador-1" id="jugador-1" value="0">0</p>
<span><img src="./src/assets/gamer2.svg" alt="jugador 2"></span> <p class="jugador-2" id="jugador-2" value="0">0</p>
</div>
<div class="flex-container crono"><span><img src="./src/assets/time.svg" alt="time"></span>
  <time id="time" class="time" datetime="0">0</time>
</div>`;
     section.append(divMarcador);
     
     const containerGame = document.createElement('div');
     containerGame.classList.add('flex-container', 'container-game');
     section.append(containerGame);
    
     const replay = document.createElement('div');
     replay.classList.add('flex-container', 'replay');
     replay.innerHTML = `<div class="flex-container"><img src="./src/assets/play.svg" alt="play" id="play"></div>
<div class="flex-container"><img src="./src/assets/reload.svg" alt="reload" id="reload"></div>`;
     section.append(replay);
   
    

     logoInicio.onclick = init;
     
     
}

