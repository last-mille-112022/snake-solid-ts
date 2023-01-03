import { SnakeFood, type FoodEngine } from './food-engine';
describe('Given a FoodEngine class', () => {
  let foodEngine: FoodEngine;
  jest.useFakeTimers();

  beforeEach(() => {
    foodEngine = new SnakeFood();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('when I give a coordinates, then I should draw food in the coordinates', () => {
    foodEngine.drawFood({ x: 10, y: 10 });
    expect(foodEngine.getFoodPosition()).toMatchObject({ x: 10, y: 10 });
  });
  test('when the time runs 15 seconds, then the food should be removed and a new food should be created', () => {
    const firstFood = foodEngine.getFoodPosition();
    foodEngine.setFoodDuration(15000);
    jest.advanceTimersByTime(16000);
    expect(firstFood).not.toMatchObject(foodEngine.getFoodPosition());
  });
});
