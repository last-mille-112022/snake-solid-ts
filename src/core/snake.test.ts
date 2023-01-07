import { Snake } from './snake';

describe('Given a Snake class', () => {
  describe('When initialized with default values', () => {
    let snake: Snake;

    beforeEach(() => {
      snake = new Snake({});
    });

    it('should be initialized with an initial length of 4 by default', () => {
      expect(snake.snakeLength()).toBe(4);
    });

    it('should expose a snakeBodyPosition method that shows the coordinates of each of its elements', () => {
      const expectedSnakeBodyPosition = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
        { x: 2, y: 5 },
      ];

      expect(snake.snakeBodyPosition()).toEqual(expectedSnakeBodyPosition);
    });
  });

  describe('When initialized with initial size of 5', () => {
    const biggerSnake = new Snake({ initialSize: 5 });

    it('can be initialized with a different size', () => {
      expect(biggerSnake.snakeLength()).toBe(5);
    });
  });
});
