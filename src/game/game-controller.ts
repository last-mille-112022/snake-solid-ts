import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
// import { SnakeFood } from './food-engine.js';

import { SnakeFood } from './food-engine.js';

/**
 * This clase is responsable of control the game
 */
export class GameController {
  start() {
    const tablero = new ConsoleRenderEngine();
    tablero.render();
    const foodGenerator = new SnakeFood();
    foodGenerator.generateFood();
  }
}
