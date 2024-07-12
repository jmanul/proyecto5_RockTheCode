
import './logo.css'

export const createLogo = (site, img, name, url) => {

     const logoContainer = document.createElement('div');
     logoContainer.classList.add('logo-container');
     logoContainer.id = name;
     site.append(logoContainer);
     const foto = document.createElement('div');
     foto.innerHTML = ` <img class= 'foto' src='./src/assets/icon2.svg'> <img class= 'foto-2' src=${img}>`;
     logoContainer.append(foto);

     if (url) {

          const link = document.createElement('a');
          link.href = url;
          site.append(link);
          link.append(logoContainer);
     }


}