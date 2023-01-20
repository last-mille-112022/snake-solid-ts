import { GameController } from './game/game-controller.js';
import { ConsoleRenderEngine } from './ui/console-render/console-render-engine.js';

const consoleRenderEngine = new ConsoleRenderEngine();
const game = new GameController(consoleRenderEngine);
game.start();
// const printer = new ConsoleMenuPrinter();
// const startGameItem = new MenuItem('Empezar partida', game.start.bind(game));
// const endGameItem = new MenuItem('Salir', () => process.exit());
// const gameMenu = new SnakeMenu([startGameItem, endGameItem], printer, 'SNAKE MENU');
// void gameMenu.printOptions();
