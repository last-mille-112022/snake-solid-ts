import { type Coordinates, type Drawable } from '../../ui/render-engine';

export type SnakeOptions = {
  initialSize: number;

  initialPosition: InitialPositiokeys;

  initialDirection: Directions;
};

export type SnakeBodyItemOptions = {
  initialDirection: Directions;
  initialPosition: Coordinates;
  lastSnakeItem?: Drawable;
};

export enum Directions {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

type InitialPosition = {
  [key in InitialPositiokeys]: Coordinates;
};

export enum InitialPositiokeys {
  CENTER = 'CENTER',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export const initialPositionValues: InitialPosition = {
  [InitialPositiokeys.CENTER]: { x: 5, y: 5 },
  [InitialPositiokeys.UP]: { x: 5, y: 2 },
  [InitialPositiokeys.DOWN]: { x: 5, y: 8 },
  [InitialPositiokeys.LEFT]: { x: 2, y: 5 },
  [InitialPositiokeys.RIGHT]: { x: 8, y: 5 },
};

export enum SnakeColors {
  WHITE = 'WHITE',
}
