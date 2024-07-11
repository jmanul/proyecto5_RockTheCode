
import { createList } from './public/src/components/list/list';
import { createLogo } from './public/src/components/logo/logo';
import { menu } from './public/src/data/data,js';

import './style.css'

const body = document.querySelector('body');
const main = document.createElement('main');
main.id = 'main';
main.className = 'flex-container';
body.append(main);
const header = document.createElement('header');
body.insertBefore(header, main);
const menuContainer = document.createElement('div');
menuContainer.className = ('inicio')
main.append(menuContainer);

createLogo(header, '/src/assets/icon.svg', 'logo-header');
createList(menuContainer, menu, 'menu-header');

const init = () => {

     const menu = document.querySelector('#menu-header-list');  
    
}

init();



