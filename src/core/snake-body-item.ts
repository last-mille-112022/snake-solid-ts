import { type Coordinates, type Drawable } from './../ui/render-engine';
import { InitialDirection, SnakeColors, type SnakeBodyItemParameters } from './types/snake-types';

export class SnakeBodyItem implements Drawable {
  #snakeBodyItemCoordinates: Coordinates;

  constructor(
    { initialDirection, initialPosition, lastSnakeItem }: SnakeBodyItemParameters,
  ) {
    if (lastSnakeItem) {
      this.#snakeBodyItemCoordinates = this.generateSnakeBody(
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
    return SnakeColors.white;
  }

  private generateSnakeBody(
    initialDirection: InitialDirection,
    lastSnakeItem: Drawable,
  ) {
    const { x, y } = lastSnakeItem.getCoordinates();
    switch (initialDirection) {
      case InitialDirection.LEFT:
        return { x: x + 1, y };
      case InitialDirection.UP:
        return { x, y: y + 1 };
      case InitialDirection.DOWN:
        return { x, y: y - 1 };
      default:
        return { x: x - 1, y };
    }
  }
}
