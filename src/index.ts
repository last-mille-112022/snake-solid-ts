import { GameController } from './game/game-controller.js';
import { ConsoleRenderEngine } from './ui/console-render/console-render-engine.js';
import MenuItem from './ui/menu-item/menu-item.js';
import { ConsoleMenuPrinter } from './ui/menu-printer/console-menu-printer.js';
import SnakeMenu from './ui/menu/snake-menu/snake-menu.js';

const startGameItem = new MenuItem('Empezar partida', () => {
  const consoleRenderEngine = new ConsoleRenderEngine();
  const game = new GameController(consoleRenderEngine);
  game.start();
});
const endGameItem = new MenuItem('Salir', () => process.exit());
const printer = new ConsoleMenuPrinter();
const gameMenu = new SnakeMenu([startGameItem, endGameItem], printer, 'SNAKE MENU');
void gameMenu.printOptions();
