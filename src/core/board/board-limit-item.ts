import { type Coordinates } from './../../ui/render-engine';
import {
  DrawableItemColors,
  type DrawableItemOptions,
} from './../types/snake-types';

export class BoardLimitsItem {
  #snakeBodyItemCoordinates: Coordinates;

  constructor({ position }: DrawableItemOptions) {
    this.#snakeBodyItemCoordinates = position;
  }

  getCoordinates(): Coordinates {
    return this.#snakeBodyItemCoordinates;
  }

  getColor(): DrawableItemColors {
    return DrawableItemColors.RED;
  }
}
