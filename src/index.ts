import { GameController } from './game/game-controller.js';
import MenuItem from './ui/menu-item/menu-item.js';
import { ConsoleMenuPrinter } from './ui/menu-printer/console-menu-printer.js';
import SnakeMenu from './ui/menu/snake-menu/snake-menu.js';

const game = new GameController();
const printer = new ConsoleMenuPrinter();
const startGameItem = new MenuItem('Empezar partida', game);
const endGameItem = new MenuItem('Salir', game);
const gameMenu = new SnakeMenu([startGameItem, endGameItem], printer, 'SNAKE MENU');
void gameMenu.printOptions();

