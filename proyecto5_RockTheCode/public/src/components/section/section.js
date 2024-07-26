import { activeOption, init, menuInit } from '../../../../main';
import { menu} from '../../data/data';
import { deleteLocalStore, turnGamer } from '../../pages/trivial/trivial';

import { createList } from '../list/list';
import { createLogo } from '../logo/logo';
import { createMessage } from '../message/message';

import './section.css';

let contador;
let s = 0;
let m = 0;


const printNumber = () => { 
     
     const segundos = document.querySelector('#time-seg');
     const minutos = document.querySelector('#time-min');

     segundos.innerHTML = s;
     minutos.innerHTML = m;

};

const tiempo = (time) => {

     const play = document.querySelector('#play');

     if (play.className == 'play-start') {

          return;

     } else {

          play.classList.add('play-start');
          play.classList.remove('active');
        

          s = '0' + 0;
          m = '0' + 0;

          contador = setInterval(() => {

               s++;

               if (s < 10) {

                    s = '0' + s;
               }

               if (s == 60) {

                    s = '0' + 0;

                    if (m <= '0' + time) {

                         m++
                         m = '0' + m;

                    }
               }

               if (m == '0' + time) {


                    setTimeout(() => {
                         
                         ClearTime();
                         const section = document.querySelector('section');
                         createMessage(section, 'se agoto su tiempo');

                    }, 500);

               }

               printNumber();

          }, 1000);


     }

    

}

export const ClearTime = () => {

     const play = document.querySelector('#play');
     
     play.classList.remove('play-start');
     clearInterval(contador);
     s ='0'+0;
     m ='0'+0;
     printNumber();
}
 
export const createSection = (button, game) => {

     const { name, time, player, claveRed, claveYellow } = game;
     
     const header = document.querySelector('header');
     header.innerHTML = '';
     createLogo(header, './src/assets/icon.svg', 'logo-header');
     const logoInicio = document.querySelector('#logo-header');
     createList(header, menu, 'menu-header'); 
     const list = document.querySelectorAll('#menu-header-list li');
     const menuIconMovile = document.createElement('div');
     menuIconMovile.className = 'menu-icon-menu';
     menuIconMovile.id = 'menu-icon-movile';
     menuIconMovile.innerHTML = ` <img class= 'icon-menu' src='./src/assets/menu.svg'>`;
     header.append(menuIconMovile);
     const listContainer = document.querySelector('#menu-header-list');
     menuIconMovile.addEventListener('click', () => {
          
          listContainer.classList.toggle('movile-menu', 'menu-header-off')
          listContainer.style.backgroundImage = 'url(./src/assets/backgraund.svg)';
     });

     menuInit(list);
     activeOption(button, list);
     
     const main = document.querySelector('main');
     main.innerHTML = '';

     const title = document.createElement('h2');
     title.innerText = name;
     main.append(title);
   
     const section = document.createElement('section');
     section.classList.add('flex-container');
     main.append(section);
   
     const divMarcador = document.createElement('div');
     divMarcador.classList.add('marcadores');
     divMarcador.innerHTML = `<div class = "jugadores "><span><img src="./src/assets/gamer1.svg" alt="jugador 1" id = "iconJugador-1" ></span> <p class="jugador-1" id="jugador-1">00</p>
<span><img src="./src/assets/gamer2.svg" alt="jugador 2" id = "iconJugador-2"></span> <p class="jugador-2" id="jugador-2">00</p>
</div>
<div class="crono"><span><img src="./src/assets/time.svg" alt="time"></span>
  <p id="time-min" class="time-min">00</p>
  <strong>:</strong>
  <p id="time-seg" class="time-seg">00</p>
</div>`;
     section.append(divMarcador);
     
     const containerGame = document.createElement('div');
     containerGame.classList.add('flex-container', 'container-game');
     containerGame.style.backgroundImage = 'url(./src/assets/backgraund.svg)';
     containerGame.innerHTML = `<div class = "saludo"><span><< pulsa play >></span></div>`;
     section.append(containerGame);
    
     const replay = document.createElement('div');
     replay.classList.add('flex-container', 'replay');
     replay.innerHTML = `<div class="flex-container"><button class = "active" id="play"><img src="./src/assets/play.svg" alt="play"></button></div>
<div class="flex-container"><img src="./src/assets/reload.svg" alt="reload" id="reload"></div>`;
     section.append(replay);

     const clear = document.createElement('div');
     clear.classList.add('flex-container', 'clear');
     clear.innerHTML = `<img src="./src/assets/clear.svg" alt="clear" id="clear">`;
     main.append(clear);

     logoInicio.onclick = init;

     ClearTime();
     
     const play = document.querySelector('#play').addEventListener('click', () => {
               
         
               player(button);
               tiempo(time);

          
     });

     const reload = document.querySelector('#reload').addEventListener('click', () => {
          
          player(button);
          ClearTime();  
     });
 
     clear.addEventListener('click', () => {   
         
          
          ClearTime();
          deleteLocalStore(claveRed, claveYellow);
          player(button);
     });

}

