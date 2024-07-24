import { createAhorcado } from "../pages/ahorcado/ahorcado";
import { createTres } from "../pages/tres/tres";
import { createTrivial } from "../pages/trivial/trivial";

export const menu = [
     { id: 'tres-en-raya', name: 'Tres en Raya', player: createTres, time: 1, claveRed: 'pointRedTres', claveYellow: 'pointYellowTres' },
     { id: 'ahorcado', name: 'Ahorcado', player: createAhorcado, time: 2, claveRed: 'pointRedAhor', claveYellow: 'pointYellowAhor' },
     { id: 'trivial', name: 'Trivial', player: createTrivial, time: 1, claveRed: 'pointRedTrivi', claveYellow: 'pointYellowTrivi' }];

export const preguntasTrivial = [{
     name: 'Ciencia', preguntas: [
          { id: 1, pregunta: "¿Cuál es el planeta más cercano al sol?", respuesta: "Mercurio" },
          { id: 2, pregunta: "¿Qué elemento químico tiene el símbolo O?", respuesta: "Oxígeno" },
          { id: 3, pregunta: "¿Cuál es el metal más abundante en la Tierra?", respuesta: "Hierro" },
          { id: 4, pregunta: "¿Cuál es el órgano más grande del cuerpo humano?", respuesta: "Piel" },
          { id: 5, pregunta: "¿Qué gas es esencial para la respiración humana?", respuesta: "Oxígeno" },
          { id: 6, pregunta: "¿Qué instrumento mide la presión atmosférica?", respuesta: "Barómetro" },
          { id: 7, pregunta: "¿Cuál es el planeta más grande del sistema solar?", respuesta: "Júpiter" },
          { id: 8, pregunta: "¿Qué vitamina es producida por el cuerpo cuando se expone al sol?", respuesta: "Vitamina D" },
          { id: 9, pregunta: "¿Cuál es la montaña más alta del mundo?", respuesta: "Everest" },
          { id: 10, pregunta: "¿Qué tipo de animal es la ballena?", respuesta: "Mamífero" },
          { id: 11, pregunta: "¿Cuál es la unidad básica de la vida?", respuesta: "Célula" },
          { id: 12, pregunta: "¿Qué tipo de sangre es conocido como donante universal?", respuesta: "O negativo" },
          { id: 13, pregunta: "¿Cuál es el órgano que bombea sangre en el cuerpo humano?", respuesta: "Corazón" },
          { id: 14, pregunta: "¿Cuál es la sustancia que da color a la piel y el cabello?", respuesta: "Melanina" },
          { id: 15, pregunta: "¿Qué teoría propuso Charles Darwin?", respuesta: "Teoría de la evolución" },
          { id: 16, pregunta: "¿Cuál es el metal más ligero?", respuesta: "Litio" },
          { id: 17, pregunta: "¿Qué planeta se conoce como el planeta rojo?", respuesta: "Marte" },
          { id: 18, pregunta: "¿Qué fenómeno meteorológico se mide con la escala de Fujita?", respuesta: "Tornados" },
          { id: 19, pregunta: "¿Qué tipo de energía se obtiene de la fisión o fusión nuclear?", respuesta: "Energía nuclear" },
          { id: 20, pregunta: "¿Quién es conocido como el padre de la física moderna?", respuesta: "Albert Einstein" }
     ]
},
{
     name: 'Historia', preguntas: [
          { id: 1, pregunta: "¿En qué año llegó el hombre a la luna?", respuesta: "1969" },
          { id: 2, pregunta: "¿Quién descubrió América?", respuesta: "Cristóbal Colón" },
          { id: 3, pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", respuesta: "1939" },
          { id: 4, pregunta: "¿En qué año terminó la Primera Guerra Mundial?", respuesta: "1918" },
          { id: 5, pregunta: "¿Quién fue el primer presidente de los Estados Unidos?", respuesta: "George Washington" },
          { id: 6, pregunta: "¿En qué país se originaron los Juegos Olímpicos?", respuesta: "Grecia" },
          { id: 7, pregunta: "¿Cuál es el libro sagrado del Islam?", respuesta: "Corán" },
          { id: 8, pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?", respuesta: "Miguel de Cervantes" },
          { id: 9, pregunta: "¿Qué país es famoso por su canal que conecta el Atlántico con el Pacífico?", respuesta: "Panamá" },
          { id: 10, pregunta: "¿En qué país se encuentran las pirámides de Giza?", respuesta: "Egipto" },
          { id: 11, pregunta: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?", respuesta: "1776" },
          { id: 12, pregunta: "¿Quién fue el líder de la Unión Soviética durante la Segunda Guerra Mundial?", respuesta: "Joseph Stalin" },
          { id: 13, pregunta: "¿Qué emperador romano se convirtió al cristianismo?", respuesta: "Constantino el Grande" },
          { id: 14, pregunta: "¿Quién fue el líder del Tercer Reich en Alemania?", respuesta: "Adolf Hitler" },
          { id: 15, pregunta: "¿Qué guerra civil tuvo lugar en los Estados Unidos entre 1861 y 1865?", respuesta: "Guerra Civil Americana" },
          { id: 16, pregunta: "¿Quién fue el faraón más famoso del antiguo Egipto?", respuesta: "Tutankamón" },
          { id: 17, pregunta: "¿En qué año comenzó la Revolución Francesa?", respuesta: "1789" },
          { id: 18, pregunta: "¿Quién fue el primer emperador de China?", respuesta: "Qin Shi Huang" },
          { id: 19, pregunta: "¿Qué reina inglesa tuvo el reinado más largo antes de la actual monarca?", respuesta: "Reina Victoria" },
          { id: 20, pregunta: "¿Qué evento inició la Primera Guerra Mundial?", respuesta: "El asesinato del archiduque Francisco Fernando" }
     ]
},
{
     name: 'Geografia', preguntas: [
          { id: 1, pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "Amazonas" },
          { id: 2, pregunta: "¿Cuál es el país más grande del mundo?", respuesta: "Rusia" },
          { id: 3, pregunta: "¿Cuál es el océano más grande del mundo?", respuesta: "Pacífico" },
          { id: 4, pregunta: "¿Cuál es el país con mayor población del mundo?", respuesta: "China" },
          { id: 5, pregunta: "¿Cuál es la capital de Australia?", respuesta: "Canberra" },
          { id: 6, pregunta: "¿Cuál es la capital de Canadá?", respuesta: "Ottawa" },
          { id: 7, pregunta: "¿Cuál es la capital de Japón?", respuesta: "Tokio" },
          { id: 8, pregunta: "¿Cuál es el desierto más grande del mundo?", respuesta: "Sahara" },
          { id: 9, pregunta: "¿Cuál es el país más pequeño del mundo?", respuesta: "Ciudad del Vaticano" },
          { id: 10, pregunta: "¿Cuál es la capital de Argentina?", respuesta: "Buenos Aires" },
          { id: 11, pregunta: "¿Cuál es el país más alto del mundo?", respuesta: "Bután" },
          { id: 12, pregunta: "¿Cuál es el segundo país más grande del mundo?", respuesta: "Canadá" },
          { id: 13, pregunta: "¿Cuál es la capital de Sudáfrica?", respuesta: "Pretoria" },
          { id: 14, pregunta: "¿Cuál es el país más pequeño de América del Sur?", respuesta: "Surinam" },
          { id: 15, pregunta: "¿Cuál es el lago más grande de África?", respuesta: "Lago Victoria" },
          { id: 16, pregunta: "¿En qué continente se encuentra el desierto de Gobi?", respuesta: "Asia" },
          { id: 17, pregunta: "¿Cuál es la ciudad más poblada de Australia?", respuesta: "Sídney" },
          { id: 18, pregunta: "¿Qué país tiene el mayor número de islas?", respuesta: "Suecia" },
          { id: 19, pregunta: "¿Cuál es el río más largo de Europa?", respuesta: "Volga" },
          { id: 20, pregunta: "¿Qué montaña es conocida como la 'Montaña Blanca' en Europa?", respuesta: "Mont Blanc" }
     ]
},
{
     name: 'Arte', preguntas: [
          { id: 1, pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Leonardo da Vinci" },
          { id: 2, pregunta: "¿Quién pintó 'La última cena'?", respuesta: "Leonardo da Vinci" },
          { id: 3, pregunta: "¿Quién escribió 'Romeo y Julieta'?", respuesta: "William Shakespeare" },
          { id: 4, pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?", respuesta: "Miguel de Cervantes" },
          { id: 5, pregunta: "¿Cuál es el idioma más hablado en el mundo?", respuesta: "Chino mandarín" },
          { id: 6, pregunta: "¿Cuántos colores hay en el arco iris?", respuesta: "Siete" },
          { id: 7, pregunta: "¿Qué país es famoso por sus tulipanes y molinos de viento?", respuesta: "Países Bajos" },
          { id: 8, pregunta: "¿Cuál es la ciudad conocida como la Gran Manzana?", respuesta: "Nueva York" },
          { id: 9, pregunta: "¿Cuál es el símbolo químico del oro?", respuesta: "Au" },
          { id: 10, pregunta: "¿Cuál es la moneda de Japón?", respuesta: "Yen" },
          { id: 11, pregunta: "¿Quién es el autor de 'Cien años de soledad'?", respuesta: "Gabriel García Márquez" },
          { id: 12, pregunta: "¿Cuál es el título de la famosa sinfonía inacabada de Schubert?", respuesta: "Sinfonía No. 8" },
          { id: 13, pregunta: "¿Quién escribió 'La Odisea'?", respuesta: "Homero" },
          { id: 14, pregunta: "¿Qué escultor italiano es conocido por su obra 'David'?", respuesta: "Miguel Ángel" },
          { id: 15, pregunta: "¿Quién es el autor de 'La Divina Comedia'?", respuesta: "Dante Alighieri" },
          { id: 16, pregunta: "¿En qué museo se encuentra la Mona Lisa?", respuesta: "Museo del Louvre" },
          { id: 17, pregunta: "¿Qué poeta español es conocido por sus obras durante la Generación del 27?", respuesta: "Federico García Lorca" },
          { id: 18, pregunta: "¿Quién escribió 'Crimen y castigo'?", respuesta: "Fiódor Dostoyevski" },
          { id: 19, pregunta: "¿Cuál es la obra más famosa de Leonardo da Vinci?", respuesta: "Mona Lisa" },
          { id: 20, pregunta: "¿Quién pintó 'La noche estrellada'?", respuesta: "Vincent van Gogh" }
     ]
}];

export const keyworsAhorcado = [
     "manzana",
     "computadora",
     "programacion",
     "javascript",
     "desarrollador",
     "internet",
     "juego",
     "ahorcado",
     "teclado",
     "pantalla",
     "telefono",
     "ciencia",
     "matematica",
     "futbol",
     "pelicula",
     "musica",
     "artista",
     "cultura",
     "historia",
     "geografia",
     "literatura",
     "fotografia",
     "guitarra",
     "piano",
     "bailar",
     "cocinar",
     "viajar",
     "vacaciones",
     "amigo",
     "familia",
     "navidad",
     "cumpleaños",
     "sorpresa",
     "regalo",
     "felicidad",
     "tristeza",
     "amor",
     "odio",
     "amistad",
     "esperanza",
     "sueño",
     "realidad",
     "fantasia",
     "aventura",
     "exploracion",
     "naturaleza",
     "animales",
     "mascota",
     "perro",
     "gato",
     "pajaro",
     "pez",
     "caballo",
     "elefante",
     "tigre",
     "leon",
     "jirafa",
     "zebra",
     "canguro",
     "rana",
     "serpiente",
     "tortuga",
     "mariposa",
     "abeja",
     "raton",
     "araña",
     "insecto",
     "flora",
     "fauna",
     "oceano",
     "montaña",
     "río",
     "lago",
     "desierto",
     "bosque",
     "isla",
     "ciudad",
     "pueblo",
     "aldea",
     "puerto",
     "puente",
     "edificio",
     "casa",
     "apartamento",
     "hotel",
     "restaurante",
     "mercado",
     "tienda",
     "supermercado",
     "escuela",
     "universidad",
     "biblioteca",
     "laboratorio",
     "oficina",
     "parque",
     "plaza",
     "estadio",
     "teatro",
     "cine",
     "museo",
     "galeria"
];


export const imagesAhorcado = [

     //Horca
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
  </svg>`,

     //Cuerda
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
  </svg>`,

     //Cabeza
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
    <circle cx="80" cy="40" r="10" stroke="#C70039" stroke-width="4" fill="none"/>
  </svg>`,

     //Cuerpo
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
    <circle cx="80" cy="40" r="10" stroke="#C70039" stroke-width="4" fill="none"/>
    <line x1="80" y1="50" x2="80" y2="100" stroke="#C70039" stroke-width="4"/>
  </svg>`,

     //Brazo derecho
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
    <circle cx="80" cy="40" r="10" stroke="#C70039" stroke-width="4" fill="none"/>
    <line x1="80" y1="50" x2="80" y2="100" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="60" x2="90" y2="80" stroke="#C70039" stroke-width="4"/>
  </svg>`,

     //Brazo izquierdo
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
    <circle cx="80" cy="40" r="10" stroke="#C70039" stroke-width="4" fill="none"/>
    <line x1="80" y1="50" x2="80" y2="100" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="60" x2="90" y2="80" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="60" x2="70" y2="80" stroke="#C70039" stroke-width="4"/>
  </svg>`,

     //Pierna derecha
     `<svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
    <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
    <circle cx="80" cy="40" r="10" stroke="#C70039" stroke-width="4" fill="none"/>
    <line x1="80" y1="50" x2="80" y2="100" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="60" x2="90" y2="80" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="60" x2="70" y2="80" stroke="#C70039" stroke-width="4"/>
    <line x1="80" y1="100" x2="90" y2="120" stroke="#C70039" stroke-width="4"/>
  </svg>`,

     //Pierna izquierda
    ` <svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg" >
  <line x1="10" y1="190" x2="90" y2="190" stroke="#C70039" stroke-width="4"/>
  <line x1="50" y1="190" x2="50" y2="10" stroke="#C70039" stroke-width="4"/>
  <line x1="50" y1="10" x2="80" y2="10" stroke="#C70039" stroke-width="4"/>
  <line x1="80" y1="10" x2="80" y2="30" stroke="#C70039" stroke-width="4"/>
  <circle cx="80" cy="40" r="10" stroke="#C70039" stroke-width="4" fill="none"/>
  <line x1="80" y1="50" x2="80" y2="100" stroke="#C70039" stroke-width="4"/>
  <line x1="80" y1="60" x2="90" y2="80" stroke="#C70039" stroke-width="4"/>
  <line x1="80" y1="60" x2="70" y2="80" stroke="#C70039" stroke-width="4"/>
  <line x1="80" y1="100" x2="90" y2="120" stroke="#C70039" stroke-width="4"/>
  <line x1="80" y1="100" x2="70" y2="120" stroke="#C70039" stroke-width="4"/>
</svg > `

];



