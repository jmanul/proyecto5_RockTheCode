import './form.css'


export const createForm = () => {

     const addLetterContainer = document.querySelector('.add-letter-container');
     addLetterContainer.innerHTML = `<form class="add-letter">Introduce una letra <div class="flex-container"><input type="text" name="letter" id="letter-input" required minlength="1" maxlength="1"><button type="submit" id ="letter-send"><img src="./src/assets/arrow.svg" alt="send"></button></div></form>`;

     const sendLetter = document.querySelector('.add-letter');
     sendLetter.addEventListener('submit', (e) => {

          e.preventDefault();

          if (e.target.letter.value == '') {

               return;

          } else {

               compareLetter(e.target.letter.value.toLowerCase());
          }
     });

}