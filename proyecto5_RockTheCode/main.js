
import { createList } from './src/components/list/list.js';
import { createLogo } from './src/components/logo/logo.js';
import { createSection } from './src/components/section/section.js';
import { menu } from './src/data/data.js';

import './style.css'


const body = document.querySelector('body');
const main = document.createElement('main');
main.id = 'main';
main.className = 'flex-container';
main.style.backgroundImage = 'url(./assets/backgraund.svg)';
body.append(main);
const header = document.createElement('header');
body.insertBefore(header, main);


export const menuInit = (list) => {

     for (const button of list) {

          const nameButton = button.innerText;
          const classButton = button.className;

          for (const game of menu) {

               if (game.name === nameButton) {


                    button.addEventListener('click', () => createSection(classButton, game));
               }

          }

     }
};

export const activeOption = (button, list) => {

     for (const item of list) {

          if (item.className.includes('seleccionado')) {

               item.classList.remove('seleccionado');

          }
     };

     const checket = document.querySelector(`.${button}`);
     checket.classList.add('seleccionado')

};


export const init = () => {

     main.innerHTML = '';
     header.innerHTML = '';
     const menuContainer = document.createElement('div');
     menuContainer.className = ('inicio')
     main.append(menuContainer);
     createLogo(header, './assets/icon.svg', 'logo-header');
     createList(menuContainer, menu, 'menu-header');
     const list = document.querySelectorAll('#menu-header-list li');

     menuInit(list);

}


init();

const logoInicio = document.querySelector('#logo-header');
logoInicio.onclick = init;

const footer = document.createElement('footer');
footer.id = 'footer';
footer.className = 'flex-container';
document.body.append(footer);
const footerMaking = document.createElement('div');
footerMaking.classList.add('flex-container', 'making');
footer.append(footerMaking);
footerMaking.innerHTML = `<span class="flex-container"><strong>Hecho por Jmanul</strong><div class="pasttri-logo"><img src="./assets/logoPastri.svg" alt="logo pasttri"></div></span>`;

