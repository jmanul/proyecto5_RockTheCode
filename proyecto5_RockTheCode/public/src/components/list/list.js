

import './list.css';

import './list.css';

export const activeOption = (button, list) => {

     for (const item of list) {

          if (item.className.includes('seleccionado')) {

               item.classList.remove('seleccionado');

          }
     };

     const checket = document.querySelector(`.${button}`);
     checket.classList.add('seleccionado')
    
};

export const createList = (site, list, name) => {


     const ulList = document.createElement('ul');
     ulList.className = 'flex-container';
     ulList.id = `${name}-list`;
     site.append(ulList);

     for (let i = 0; i < list.length; i++) {

          let item = list[i];

          if (item.url) {

               const a = document.createElement('a');
               a.href = item.url;

               if (item.url[0] === '#') {

                    a.target = '_self';
               } else {

                    a.target = '_blank';
               }

               ulList.append(a);
               if (item.icon) {
                    const li = document.createElement('li');
                    a.append(li);
                    const img = document.createElement('img');
                    img.src = item.icon;
                    const div = document.createElement('div');
                    div.className = item.id;
                    div.appendChild(img);
                    li.appendChild(div);

               } else {

                    const li = document.createElement('li');
                    li.className = item.id;
                    const p = document.createElement('p');
                    p.innerText = item.name;
                    li.append(p);
                    a.append(li);
               }

          } else {

               if (item.icon) {

                    const li = document.createElement('li');
                    ulList.append(li);
                    const img = document.createElement('img');
                    img.src = item.icon;
                    const div = document.createElement('div');
                    div.className = item.id;
                    div.appendChild(img);
                    li.appendChild(div);

               } else {

                    const li = document.createElement('li');
                    li.className = item.id;
                    const p = document.createElement('p');
                    p.innerText = item.name;
                    li.append(p);

                    ulList.append(li);

               }


          }
     };

};