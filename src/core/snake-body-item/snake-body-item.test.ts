import { SnakeColors } from '../types/snake-types';
import { SnakeBodyItem } from './snake-body-item';

describe('Given a SnakeBodyItem class', () => {
  describe('When initialized with certain position', () => {
    const snakeBodyItem = new SnakeBodyItem({ position: { x: 5, y: 5 } });

    it('Then it should return a white color attribute and expected coordinates', () => {
      const expectedColor = SnakeColors.WHITE;
      const expectedCoordinates = { x: 5, y: 5 };

      expect(snakeBodyItem.getColor()).toBe(expectedColor);
      expect(snakeBodyItem.getCoordinates()).toEqual(expectedCoordinates);
    });
  });
});
