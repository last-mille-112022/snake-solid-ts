import { type Coordinates, type Drawable } from './../../ui/render-engine';
import {
  backwardDirection,
  SnakeMovement,
} from './../constants/snake-constants';
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
        SnakeMovement.random,
      ),
    });

    this.snakeBody.unshift(newSnakeHead);
  }

  private generateSnakeItemCoordinates(
    initialCoordinates: Coordinates,
    movement: SnakeMovement,
  ) {
    let newCoordinates: Coordinates;
    const movementQualifiers = this.obtainMovementQualifiers(movement);

    switch (this.#snakeDirection) {
      case Directions.LEFT:
        newCoordinates = {
          x: initialCoordinates.x + movementQualifiers[Directions.LEFT],
          y: initialCoordinates.y,
        };
        break;
      case Directions.UP:
        newCoordinates = {
          x: initialCoordinates.x,
          y: initialCoordinates.y + movementQualifiers[Directions.UP],
        };
        break;
      case Directions.DOWN:
        newCoordinates = {
          x: initialCoordinates.x,
          y: initialCoordinates.y + movementQualifiers[Directions.DOWN],
        };
        break;
      default:
        newCoordinates = {
          x: initialCoordinates.x + movementQualifiers[Directions.RIGHT],
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
        position: this.generateSnakeItemCoordinates(
          body[i - 1].getCoordinates(),
          SnakeMovement.initial,
        ),
      });
      body.push(bodyItem);
    }

    return body;
  }

  private obtainMovementQualifiers(movement: SnakeMovement) {
    const movementQualifiers = {
      [SnakeMovement.initial]: {
        [Directions.LEFT]: 1,
        [Directions.UP]: 1,
        [Directions.DOWN]: -1,
        [Directions.RIGHT]: -1,
      },
      [SnakeMovement.random]: {
        [Directions.LEFT]: -1,
        [Directions.UP]: -1,
        [Directions.DOWN]: 1,
        [Directions.RIGHT]: 1,
      },
    };

    return movementQualifiers[movement];
  }
}
