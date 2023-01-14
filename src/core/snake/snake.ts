import { type Coordinates, type Drawable } from './../../ui/render-engine';
import { backwardDirection } from './../constants/snake-constants';
import { SnakeBodyItem } from './../snake-body-item/snake-body-item';
import {
  Directions,
  type MoveSnake,
  type SnakeOptions,
} from './../types/snake-types';

export class Snake {
  #initialPosition: Coordinates;
  snakeBody: Drawable[];
  #snakeDirection: Directions;
  #growingCounter: number;

  constructor({
    initialPosition,
    initialSize = 4,
    initialDirection = Directions.RIGHT,
  }: SnakeOptions) {
    this.#initialPosition = initialPosition;
    this.#snakeDirection = initialDirection;
    this.#growingCounter = 0;
    this.snakeBody = this.generateSnakeBody(initialSize);
  }

  public snakeLength() {
    return this.snakeBody.length;
  }

  public snakeBodyPosition() {
    const snakeBodyCoordinates = [];

    for (let i = 0; i < this.snakeLength(); i++) {
      snakeBodyCoordinates.push(this.snakeBody[i].getCoordinates());
    }

    return snakeBodyCoordinates;
  }

  public changeDirection({ direction }: MoveSnake) {
    if (backwardDirection[direction] === this.#snakeDirection) {
      return;
    }

    this.#snakeDirection = direction;
  }

  public growSnake(growAmount: number) {
    this.#growingCounter += growAmount;
  }

  public moveSnake() {
    if (this.#growingCounter === 0) {
      this.snakeBody.pop();
    }

    if (this.#growingCounter > 0) {
      this.#growingCounter--;
    }

    const newSnakeHead = new SnakeBodyItem({
      position: this.generateSnakeItemCoordinates(
        this.snakeBody[0].getCoordinates(),
      ),
    });

    this.snakeBody.unshift(newSnakeHead);
  }

  private generateSnakeItemCoordinates(initialCoordinates: Coordinates) {
    let newCoordinates: Coordinates;

    switch (this.#snakeDirection) {
      case Directions.LEFT:
        newCoordinates = {
          x: initialCoordinates.x - 1,
          y: initialCoordinates.y,
        };
        break;
      case Directions.UP:
        newCoordinates = {
          x: initialCoordinates.x,
          y: initialCoordinates.y - 1,
        };
        break;
      case Directions.DOWN:
        newCoordinates = {
          x: initialCoordinates.x,
          y: initialCoordinates.y + 1,
        };
        break;
      default:
        newCoordinates = {
          x: initialCoordinates.x + 1,
          y: initialCoordinates.y,
        };
    }

    return newCoordinates;
  }

  private generateInitialSnakeItemCoordinates(initialCoordinates: Coordinates) {
    let newCoordinates: Coordinates;

    switch (this.#snakeDirection) {
      case Directions.LEFT:
        newCoordinates = {
          x: initialCoordinates.x + 1,
          y: initialCoordinates.y,
        };
        break;
      case Directions.UP:
        newCoordinates = {
          x: initialCoordinates.x,
          y: initialCoordinates.y + 1,
        };
        break;
      case Directions.DOWN:
        newCoordinates = {
          x: initialCoordinates.x,
          y: initialCoordinates.y - 1,
        };
        break;
      default:
        newCoordinates = {
          x: initialCoordinates.x - 1,
          y: initialCoordinates.y,
        };
    }

    return newCoordinates;
  }

  private generateSnakeBody(size: number) {
    const body: Drawable[] = [];
    body.push(new SnakeBodyItem({ position: this.#initialPosition }));

    for (let i = 1; i < size; i++) {
      const bodyItem = new SnakeBodyItem({
        position: this.generateInitialSnakeItemCoordinates(
          body[i - 1].getCoordinates(),
        ),
      });
      body.push(bodyItem);
    }

    return body;
  }
}
