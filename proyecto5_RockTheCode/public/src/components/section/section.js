import { init, menuInit } from '../../../../main';
import { menu } from '../../data/data';
import { createList } from '../list/list';
import { createLogo } from '../logo/logo';

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


const tiempo = () => {

     const play = document.querySelector('#play');

     if (play.className == 'play-start') {

          return;
     }

     play.classList.add('play-start');


     contador = setInterval(() => {
           
          s++;

          if (s < 10) {

               s = '0' + s;
          }
          
          if (s == 60) {
               
               s = '0' + 0;
               m < 10 ? m = '0' + m : m = m
               if (m == 3) {
                    
                    return;

               } else {
                  
                    m++ 

               }
    
          } 

          printNumber();

     }, 1000);

}


const ClearTime = () => {

     const play = document.querySelector('#play');
     play.classList.remove('play-start');
     clearInterval(contador);
     s ='0'+0;
     m ='0'+0;
     printNumber();
}

const clearGame = () => {
      
     ClearTime();

     const firstGamer = document.querySelector('#jugador-1');
     const secondGamer = document.querySelector('#jugador-2');

     firstGamer.innerHTML = '0';
     secondGamer.innerHTML = '0';

 }



export const createSection = (name) => {

     const header = document.querySelector('header');
     header.innerHTML = '';
     createLogo(header, './src/assets/icon.svg', 'logo-header');
     const logoInicio = document.querySelector('#logo-header');
     createList(header, menu, 'menu-header'); 
     const list = document.querySelectorAll('#menu-header-list li')

     menuInit(list);

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
     divMarcador.innerHTML = `<div class = "jugadores "><span><img src="./src/assets/gamer1.svg" alt="jugador 1"></span> <p class="jugador-1" id="jugador-1" value="0">0</p>
<span><img src="./src/assets/gamer2.svg" alt="jugador 2"></span> <p class="jugador-2" id="jugador-2" value="0">0</p>
</div>
<div class="crono"><span><img src="./src/assets/time.svg" alt="time"></span>
  <p id="time-min" class="time-min">00</p>
  <span>:</span>
  <p id="time-seg" class="time-seg">00</p>
</div>`;
     section.append(divMarcador);
     
     const containerGame = document.createElement('div');
     containerGame.classList.add('flex-container', 'container-game');
     section.append(containerGame);
    
     const replay = document.createElement('div');
     replay.classList.add('flex-container', 'replay');
     replay.innerHTML = `<div class="flex-container"><button id="play"><img src="./src/assets/play.svg" alt="play"></button></div>
<div class="flex-container"><img src="./src/assets/reload.svg" alt="reload" id="reload"></div>`;
     section.append(replay);

     const clear = document.createElement('div');
     clear.classList.add('flex-container', 'clear');
     clear.innerHTML = `<img src="./src/assets/clear.svg" alt="clear" id="clear">`;
     main.append(clear);

     logoInicio.onclick = init;
     
     const play = document.querySelector('#play').addEventListener('click', tiempo);
     const reload = document.querySelector('#reload').addEventListener('click', ClearTime);
     clear.querySelector('#clear').addEventListener('click', clearGame);
     
}

