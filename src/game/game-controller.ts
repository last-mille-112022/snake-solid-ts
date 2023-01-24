import { Snake } from '../core/snake/snake.js';
import { Directions } from '../core/types/snake-types.js';
import { type Drawable, type Key, type SnakeRenderEngine } from '../ui/render-engine';
import { Food } from './items/food.js';
import { type Item } from './items/item.js';

/**
 * This clase is responsable of control the game
 */
export class GameController {
  #renderEngine: SnakeRenderEngine;
  #snake: Snake;
  #items: Item[];
  constructor(renderEngine: SnakeRenderEngine) {
    this.#renderEngine = renderEngine;
    this.#snake = new Snake({
      initialPosition: {
        x: 10,
        y: 10,
      },
    });
    this.#items = [new Food({ x: 20, y: 15 }, 10, renderEngine, this.#snake)];
    this.#registerMoveListener();
  }

  start() {
    setInterval(() => {
      this.#executeGameLoop();
    }, 100);
  }

  #registerMoveListener() {
    this.#renderEngine.addExitListener(() => process.exit());
    this.#renderEngine.addMoveListener((key: Key) => {
      let newDirection: Directions | undefined;
      switch (key.name) {
        case 's':
          newDirection = Directions.DOWN;
          break;
        case 'w':
          newDirection = Directions.UP;
          break;
        case 'd':
          newDirection = Directions.RIGHT;
          break;
        case 'a':
          newDirection = Directions.LEFT;
          break;
        default:
      }

      if (newDirection !== undefined) {
        this.#snake.changeDirection({ direction: newDirection });
      }
    });
  }

  #executeGameLoop() {
    this.#renderEngine.clearGameScreen();
    this.#snake.moveSnake();
    this.#drawElements([...this.#snake.snakeBody, ...this.#items]);
    this.#renderEngine.render();
  }

  #drawElements(items: Drawable[]) {
    items.forEach(item => {
      this.#renderEngine.drawElement(item);
    });
  }

  end() {
    // end the game
  }
}
