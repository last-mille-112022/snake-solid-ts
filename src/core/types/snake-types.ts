import { type Coordinates } from '../../ui/render-engine';

export type SnakeOptions = {
  initialSize?: number;

  initialPosition: Coordinates;

  initialDirection?: Directions;
};

export type DrawableItemOptions = {
  position: Coordinates;
};

export enum DrawableItemColors {
  WHITE = 'white',
  RED = 'red',
}

export enum Directions {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type MoveSnake = {
  direction: Directions;
};
