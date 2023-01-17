import type { Coordinates, RenderScorable } from '../../ui/render-engine';
import { Item } from './item';

export class Food extends Item {
  #scoreEngine: RenderScorable;

  constructor(boardSize: Coordinates, lifespan: number, scoreEngine: RenderScorable) {
    super(boardSize, 'red', lifespan);
    this.#scoreEngine = scoreEngine;
  }

  onCollision() {
    // growSnake(1);
    this.#scoreEngine.updateScore(100);
  }
}
