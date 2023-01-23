import type { Snake } from '../../core/snake/snake';
import type { Coordinates, RenderScorable } from '../../ui/render-engine';
import { Item } from './item.js';

export class Food extends Item {
  #scoreEngine: RenderScorable;
  #snake: Snake;

  constructor(position: Coordinates, lifespan: number, scoreEngine: RenderScorable, snake: Snake) {
    super(position, 'red', lifespan);
    this.#scoreEngine = scoreEngine;
    this.#snake = snake;
  }

  onCollision() {
    this.#snake.growSnake(1);
    this.#scoreEngine.updateScore(100);
    this.lifespan = 0;
  }
}
