import { SnakeFood, type FoodEngine } from './food-engine';
describe('Given a FoodEngine class', () => {
  let foodEngine: FoodEngine;

  beforeEach(() => {
    foodEngine = new SnakeFood();
  });

  test('when I give a coordinates, then I should draw food in the coordinates', () => {
    foodEngine.drawFood({ x: 10, y: 10 });
    expect(foodEngine.drawFood({ x: 10, y: 10 })).toMatchObject({ x: 10, y: 10 });
  });
  test('when the time runs 15 seconds, then the food should be removed and a new food should be created', () => {});
});
