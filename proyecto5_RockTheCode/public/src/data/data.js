import { createAhorcado } from "../pages/ahorcado/ahorcado";
import { createTres } from "../pages/tres/tres";
import { createTrivial } from "../pages/trivial/trivial";

export const menu = [
     { id: 'tres-en-raya', name: 'Tres en Raya', player: createTres, time: 1, claveRed: 'pointRedTres', claveYellow: 'pointYellowTres' },
     { id: 'ahorcado', name: 'Ahorcado', player: createAhorcado, time: 1, claveRed: 'pointRedTres', claveYellow: 'pointYellowTres' },
     { id: 'trivial', name: 'Trivial', player: createTrivial, time: 1, claveRed: 'pointRedTres', claveYellow: 'pointYellowTres' }];



