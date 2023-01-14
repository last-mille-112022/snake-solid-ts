import { type Coordinates, type Drawable } from './../../ui/render-engine';
import { SnakeColors, type SnakeBodyItemOptions } from './../types/snake-types';

export class SnakeBodyItem implements Drawable {
  #snakeBodyItemCoordinates: Coordinates;

  constructor({ position }: SnakeBodyItemOptions) {
    this.#snakeBodyItemCoordinates = position;
  }

  getCoordinates(): Coordinates {
    return this.#snakeBodyItemCoordinates;
  }

  getColor(): SnakeColors {
    return SnakeColors.WHITE;
  }
}
