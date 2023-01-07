import { type Coordinates, type Drawable } from './../ui/render-engine';
import {
  Directions,
  SnakeColors,
  type SnakeBodyItemOptions,
} from './types/snake-types';

export class SnakeBodyItem implements Drawable {
  #snakeBodyItemCoordinates: Coordinates;

  constructor({
    initialDirection,
    initialPosition,
    lastSnakeItem,
  }: SnakeBodyItemOptions) {
    if (lastSnakeItem) {
      this.#snakeBodyItemCoordinates = this.generateSnakeBodyCoordinates(
        initialDirection,
        lastSnakeItem,
      );
    } else {
      this.#snakeBodyItemCoordinates = initialPosition;
    }
  }

  getCoordinates(): Coordinates {
    return this.#snakeBodyItemCoordinates;
  }

  getColor(): SnakeColors {
    return SnakeColors.WHITE;
  }

  private generateSnakeBodyCoordinates(
    initialDirection: Directions,
    lastSnakeItem: Drawable,
  ) {
    const { x, y } = lastSnakeItem.getCoordinates();
    switch (initialDirection) {
      case Directions.LEFT:
        return { x: x + 1, y };
      case Directions.UP:
        return { x, y: y + 1 };
      case Directions.DOWN:
        return { x, y: y - 1 };
      default:
        return { x: x - 1, y };
    }
  }
}
