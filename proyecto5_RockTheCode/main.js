
import { createList } from './public/src/components/list/list';
import { createLogo } from './public/src/components/logo/logo';
import { menu} from './public/src/data/data.js';

import './style.css'


const body = document.querySelector('body');
const main = document.createElement('main');
main.id = 'main';
main.className = 'flex-container';
body.append(main);
const header = document.createElement('header');
body.insertBefore(header, main);


export const menuInit = (list) => {

     for (const button of list) {

          const nameButton = button.innerText;
          const classButton = button.className;

          for (const game of menu) {

               if (game.name === nameButton) {


                    button.addEventListener('click', () => game.player(classButton,game));   
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
     createLogo(header, './src/assets/icon.svg', 'logo-header');
     createList(menuContainer, menu, 'menu-header');
     const list = document.querySelectorAll('#menu-header-list li');
    
     menuInit(list);

}


init();

const logoInicio = document.querySelector('#logo-header');
logoInicio.onclick = init;

