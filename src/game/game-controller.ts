// import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
import { SnakeFood } from './food-engine.js';

/**
 * This clase is responsable of control the game
 */
export class GameController {
  start() {
    new SnakeFood();
    // start the game
    // const tablero = new ConsoleRenderEngine();
    // tablero.render();
    // tablero.drawElement({
    //   getCoordinates: () => ({ x: 10, y: 10 }),
    //   getColor: () => 'red',
    // });
    // tablero.drawElement({
    //   getCoordinates: () => ({ x: 11, y: 10 }),
    //   getColor: () => 'red',
    // });
    // tablero.render();
  }
}
