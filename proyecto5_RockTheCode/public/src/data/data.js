import { createAhorcado } from "../pages/ahorcado/ahorcado";
import { createTres } from "../pages/tres/tres";
import { createTrivial } from "../pages/trivial/trivial";

export const menu = [{ id: 'tres-en-raya', name: 'Tres en Raya', play: createTres }, { id: 'ahorcado', name: 'Ahorcado', play: createAhorcado }, { id: 'trivial', name: 'Trivial', play: createTrivial }];

export const combinations = [[0, 1, 2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [3, 4, 5], [0, 4, 8], [6, 4, 2]];

