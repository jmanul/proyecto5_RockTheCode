import './message.css';

export const createMessage = (site, message) => {

     const containerMessage = document.createElement('div');
     containerMessage.classList.add('flex-container', 'container-message');
     containerMessage.id = 'container-message';
     containerMessage.innerHTML = `<div class="flex-container"><img src="./src/assets/clear.svg" id="clear-message"/><p>${message}</p></div>`;
     site.append(containerMessage);

     const clearMessage = document.querySelector('#clear-message').addEventListener('click', () => { 

          containerMessage.remove();
     });

     



}