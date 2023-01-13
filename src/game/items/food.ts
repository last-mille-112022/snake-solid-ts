import type { Coordinates } from '../../ui/render-engine';
import { Item } from './item';

export class Food extends Item {
  constructor(boardSize: Coordinates, lifespan: number) {
    super(boardSize, 'red', lifespan);
  }

  onCollision() {
    // growSnake(1);
    // updateScore(100);
  }
}
