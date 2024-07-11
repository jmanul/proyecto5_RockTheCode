import './logo.css'

export const createLogo = (site, img, name, url) => {

     const logoContainer = document.createElement('div');
     logoContainer.classList.add('logo-container');
     logoContainer.id = name;
     site.append(logoContainer);
     const foto = document.createElement('div');
     foto.innerHTML = `<img src=${img}>`;
     foto.className = 'foto';
     logoContainer.append(foto);

     if (url) {

          const link = document.createElement('a');
          link.href = url;
          site.append(link);
          link.append(logoContainer);
     }
}