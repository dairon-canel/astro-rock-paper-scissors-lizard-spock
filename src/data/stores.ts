import { writable } from 'svelte/store';
import { actions } from '../constants/actions';
import { Player, Game } from '../types/GameClasses';

const player1 = new Player('You');
const player2 = new Player('The House');

export const gameState = writable(new Game(player1, player2, actions));
