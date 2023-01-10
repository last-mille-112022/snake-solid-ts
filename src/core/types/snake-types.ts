import { type Coordinates } from '../../ui/render-engine';

export type SnakeOptions = {
  initialSize?: number;

  initialPosition: Coordinates;

  initialDirection?: Directions;
};

export type SnakeBodyItemOptions = {
  position: Coordinates;
};

export enum Directions {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum SnakeColors {
  WHITE = 'WHITE',
}

export type MoveSnake = {
  direction: Directions;
};
