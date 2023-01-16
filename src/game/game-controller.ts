import { Snake } from '../core/snake/snake.js';
import { ConsoleRenderEngine } from './../ui/console-render/console-render-engine.js';
export class GameController {
  start() {
    const tablero = new ConsoleRenderEngine();
    const snake = new Snake({ initialPosition: { x: 5, y: 5 } });
    tablero.render();

    for (const item of snake.snakeBody) {
      tablero.drawElement(item);
    }
  }
}
