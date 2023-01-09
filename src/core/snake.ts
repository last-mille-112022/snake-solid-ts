import { type Coordinates, type Drawable } from './../ui/render-engine';
import { SnakeBodyItem } from './snake-body-item';
import {
  Directions,
  InitialPositiokeys,
  initialPositionValues,
  type MoveSnakeOptions,
  type SnakeOptions,
} from './types/snake-types';

export class Snake {
  #initialPosition: Coordinates;
  #snakeBody: Drawable[];

  constructor({
    initialSize = 4,
    initialPosition = InitialPositiokeys.CENTER,
    initialDirection = Directions.RIGHT,
  }: Partial<SnakeOptions>) {
    this.#snakeBody = [];
    this.#initialPosition = initialPositionValues[initialPosition];
    this.generateSnake(initialDirection, initialSize);
  }

  public snakeLength() {
    return this.#snakeBody.length;
  }

  public snakeBodyPosition() {
    const snakeBodyCoordinates = [];

    for (let i = 0; i < this.snakeLength(); i++) {
      snakeBodyCoordinates.push(this.#snakeBody[i].getCoordinates());
    }

    return snakeBodyCoordinates;
  }

  public moveSnake({
    hasChangedDirection,
    controllerDirection,
  }: MoveSnakeOptions) {
    console.log(hasChangedDirection, controllerDirection);
  }

  private generateSnake(initialDirection: Directions, initialSize: number) {
    for (let i = 0; i < initialSize; i++) {
      const snakeBodyItem = new SnakeBodyItem({
        initialDirection,
        initialPosition: this.#initialPosition,
        lastSnakeItem: this.#snakeBody.at(-1),
      });
      this.#snakeBody.push(snakeBodyItem);
    }
  }
}
