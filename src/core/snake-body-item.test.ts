import { SnakeBodyItem } from './snake-body-item';
import { InitialDirection, initialPositionValues, SnakeColors } from './types/snake-types';

describe('SnakeBodyItem class', () => {
  let snakeBodyItem: SnakeBodyItem;

  beforeEach(() => {
    snakeBodyItem = new SnakeBodyItem({ initialDirection: InitialDirection.RIGHT, initialPosition: { x: 5, y: 5 } });
  });

  it('should return a white color attribute', () => {
    const expectedColor = SnakeColors.white;

    expect(snakeBodyItem.getColor()).toBe(expectedColor);
  });

  test.each([[InitialDirection.RIGHT, { x: 4, y: 5 }], [InitialDirection.LEFT, { x: 6, y: 5 }], [InitialDirection.UP, { x: 5, y: 6 }], [InitialDirection.DOWN, { x: 5, y: 4 }]])(
    'when initialDirection is %p should generate a SnakeBodyItem with coordinates: %p',
    (initialDirection, expected) => {
      snakeBodyItem = new SnakeBodyItem({ initialDirection, initialPosition: initialPositionValues.CENTER, lastSnakeItem: snakeBodyItem });

      expect(snakeBodyItem.getCoordinates()).toEqual(expected);
    },
  );
});
