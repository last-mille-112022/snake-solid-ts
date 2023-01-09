import { SnakeBodyItem } from './snake-body-item';
import {
  Directions,
  initialPositionValues,
  SnakeColors,
} from './types/snake-types';

describe('Given a SnakeBodyItem class', () => {
  describe('When initialized with certain initialDirection and initialPosition', () => {
    const snakeBodyItem = new SnakeBodyItem({
      initialDirection: Directions.RIGHT,
      initialPosition: { x: 5, y: 5 },
    });
    it('Then it should return a white color attribute', () => {
      const expectedColor = SnakeColors.WHITE;

      expect(snakeBodyItem.getColor()).toBe(expectedColor);
    });
  });

  describe.each([
    [Directions.RIGHT, { x: 4, y: 5 }],
    [Directions.LEFT, { x: 6, y: 5 }],
    [Directions.UP, { x: 5, y: 6 }],
    [Directions.DOWN, { x: 5, y: 4 }],
  ])('When initialDirection is %p', (initialDirection, expected) => {
    const lastSnakeItem = new SnakeBodyItem({
      initialDirection: Directions.RIGHT,
      initialPosition: { x: 5, y: 5 },
    });
    const test = new SnakeBodyItem({
      initialDirection,
      initialPosition: initialPositionValues.CENTER,
      lastSnakeItem,
    });
    it(`Then it should generate a SnakeBodyItem with coordinates: ${JSON.stringify(
      expected,
    )}`, () => {
      expect(test.getCoordinates()).toEqual(expected);
    });
  });
});
