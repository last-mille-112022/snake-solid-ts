import { Directions } from '../types/snake-types';

export const backwardDirection = {
  [Directions.LEFT]: Directions.RIGHT,
  [Directions.RIGHT]: Directions.LEFT,
  [Directions.UP]: Directions.DOWN,
  [Directions.DOWN]: Directions.UP,
};

export enum SnakeMovement {
  initial = 'INITIAL',
  random = 'RANDOM',
}

export interface SnakeMovementQualifiers {
  [Directions.LEFT]: number;
  [Directions.UP]: number;
  [Directions.DOWN]: number;
  [Directions.RIGHT]: number;
}
