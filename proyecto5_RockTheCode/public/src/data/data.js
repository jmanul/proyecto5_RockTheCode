import { createAhorcado } from "../pages/ahorcado/ahorcado";
import { createTres } from "../pages/tres/tres";
import { createTrivial } from "../pages/trivial/trivial";

export const menu = [{ name: 'Tres en Raya', play: createTres }, { name: 'ahorcado', play: createAhorcado }, { name: 'Trivial', play: createTrivial }];