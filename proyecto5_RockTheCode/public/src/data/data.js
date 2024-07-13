import { createAhorcado } from "../pages/ahorcado/ahorcado";
import { createTres } from "../pages/tres/tres";
import { createTrivial } from "../pages/trivial/trivial";

export const menu = [{ id: 'tres-en-raya', name: 'Tres en Raya', play: createTres }, { id: 'ahorcado', name: 'Ahorcado', play: createAhorcado }, { id: 'trivial', name: 'Trivial', play: createTrivial }];