import { Snake } from '../../core/snake/snake';
import { ScoreEngine } from '../score/score-engine';
import { Food } from './food';
import { ItemChecker } from './item-checker';

describe('Given a ItemChecker class', () => {
  let itemChecker: ItemChecker;
  let food1: Food;
  let food2: Food;
  let food3: Food;
  let scoreEngine: ScoreEngine;
  let snake: Snake;

  beforeAll(() => {
    scoreEngine = new ScoreEngine();
    snake = new Snake({ initialPosition: { x: 8, y: 22 } });
    food1 = new Food({ x: 20, y: 15 }, 20, scoreEngine, snake);
    food2 = new Food({ x: 18, y: 17 }, 10, scoreEngine, snake);
    food3 = new Food({ x: 16, y: 19 }, 0, scoreEngine, snake);
    itemChecker = new ItemChecker([food1, food2, food3]);
  });

  // 1. La clase debe comprobar el lifespan de todos los ítems en su itemList y eliminar aquellos cuyo método "checkLifespan" devuelva true.
  test('the class should iterate over the itemList, call the "checkLifespan" method and remove the items which method returns true', () => {
    itemChecker.checkItemList();
    expect(itemChecker.getItemList().length).toEqual(2);
  });
});
