import { Directions } from '../types/snake-types';

export const backwardDirection = {
  [Directions.LEFT]: Directions.RIGHT,
  [Directions.RIGHT]: Directions.LEFT,
  [Directions.UP]: Directions.DOWN,
  [Directions.DOWN]: Directions.UP,
};
