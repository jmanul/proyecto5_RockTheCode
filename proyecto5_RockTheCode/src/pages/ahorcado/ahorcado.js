
import { createForm } from '../../components/form/form';
import { createMessage } from '../../components/message/message';
import { ClearTime } from '../../components/section/section';
import { imagesAhorcado, keyworsAhorcado } from '../../data/data';
import { addPoint, initDate, printLocalStorage, turnGamer } from '../trivial/trivial';
import './ahorcado.css';

let correctKeyword;
let letterUp = 0;
let countGamer = 1;
let figureNumber = 0;
let someLetter = false;
let letterOnList = [];

//? comprueba si se ha completado la palabra

const compareWiner = () => {

     const containerGame = document.querySelector('.container-game');
     const keyworSecretContainer = document.querySelector('.keywor-secret-container');
     const letterSend = document.querySelector('#letter-send');

     if (correctKeyword.length == letterUp) {

          keyworSecretContainer.classList.add('winer');
          setTimeout(() => {

               createMessage(containerGame, 'Enhorabuena, has ganado.😊')

               ClearTime();
               addPoint(countGamer, 'pointRedAhor', 'pointYellowAhor');

               letterSend.style.pointerEvents = 'none';

          }, 1000);

     }
}

//? pinta la figura del ahorcado que corresponda o concluye la partida

const printAhorcadoPart = () => {

     figureNumber++;

     const containerGame = document.querySelector('.container-game');
     const drawingContainer = document.querySelector('.drawing-container');
     drawingContainer.innerHTML = imagesAhorcado[figureNumber];
     const letterSend = document.querySelector('#letter-send');

     if (figureNumber == 7) {

          letterSend.style.pointerEvents = 'none';

          setTimeout(() => {

               createMessage(containerGame, `Se agotaron todos los intentos,la palabra que buscabas es ${correctKeyword.toUpperCase()} 😬`)
               ClearTime();

          }, 1000);
     }       

}

//? descubre las letras acertadas

const printLetterKeyword = (letter, position) => {

     letterOnList.push(letter);

     const letterContainer = document.querySelector(`#letterContainer-${position}`);
     letterContainer.classList.add('letter-container-on');

     compareWiner();
}

//? comprueba la letra introducida para despues iniciar el proceso correspondiente

export const compareLetter = (letter) => {

     someLetter = false; 
  
     const countInput = document.querySelector('.count-input');
     countInput.innerHTML = `<p>${letter}</p>`;
     
     createForm();

     for (const element of letterOnList) {

          if (element == letter) {
               console.log(letterOnList);
               printAhorcadoPart();
               return;
          }

     }

     for (let i = 0; i < correctKeyword.length; i++) {

          let item = correctKeyword[i];

          if (item == letter) {

               letterUp++;
               printLetterKeyword(letter, i);
               someLetter = true;

          }

     };

     if (someLetter == false) {

          printAhorcadoPart();
     }

}

export const createAhorcado = (button) => {

     letterUp = 0;
     letterOnList.length = 0;
     figureNumber = 0;

     initDate('pointRedAhor', 'pointYellowAhor');

     const containerGame = document.querySelector('.container-game');
     containerGame.innerHTML = '';
     const tableAhorcado = document.createElement('div');
     tableAhorcado.classList.add('table-ahorcado', 'flex-container');
     containerGame.append(tableAhorcado);
     const drawingContainer = document.createElement('div');
     drawingContainer.classList.add('drawing-container', 'flex-container');
     drawingContainer.innerHTML = imagesAhorcado[0];
     const keyworsContainer = document.createElement('div');
     keyworsContainer.className = 'keywors-container';
     tableAhorcado.append(drawingContainer, keyworsContainer);

     const keyworSecretContainer = document.createElement('div');
     keyworSecretContainer.classList.add('keywor-secret-container', 'flex-container');
     keyworsContainer.append(keyworSecretContainer);

     let position = Math.floor(Math.random() * keyworsAhorcado.length);

     for (let i = 0; i < keyworsAhorcado[position].length; i++) {

          let letter = keyworsAhorcado[position][i]
          correctKeyword = keyworsAhorcado[position];

          const letterContainer = document.createElement('div');
          letterContainer.id = `letterContainer-${i}`;
          letterContainer.classList.add('flex-container', `letter-container`, 'letter-container-off');
          letterContainer.innerHTML = `<p>${letter}</p>`
          keyworSecretContainer.append(letterContainer);

     }

     printLocalStorage();

     const addLetterContainer = document.createElement('div');
     addLetterContainer.classList.add('add-letter-container');
     const countInput = document.createElement('div');
     countInput.classList.add('count-input', 'flex-container');
     keyworsContainer.append(countInput, addLetterContainer);

     createForm();
     ClearTime();
     countGamer++;
     turnGamer(countGamer);



}

