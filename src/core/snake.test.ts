import { Snake } from './snake';

describe('Snake class', () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake({});
  });

  it('should be initialized with an initial length of 4 by default', () => {
    expect(snake.snakeLength()).toBe(4);
  });

  it('can be initialized with a different size', () => {
    const biggerSnake = new Snake({ initialSize: 5 });
    expect(biggerSnake.snakeLength()).toBe(5);
  });

  it('should expose a snakeBodyPosition method that shows the coordinates of each of its elements', () => {
    const expectedSnakeBodyPosition = [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }];

    expect(snake.snakeBodyPosition()).toEqual(expectedSnakeBodyPosition);
  });
});
