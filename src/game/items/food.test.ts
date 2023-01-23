import { Snake } from '../../core/snake/snake';
import { ScoreEngine } from '../score/score-engine';
import { Food } from './food';

describe('Given a Food class', () => {
  let food: Food;
  let scoreEngine: ScoreEngine;
  let snake: Snake;

  beforeAll(() => {
    scoreEngine = new ScoreEngine();
    snake = new Snake({ initialPosition: { x: 8, y: 22 } });
    food = new Food({ x: 20, y: 15 }, 2, scoreEngine, snake);
  });

  // 1. El método "getCoordinates" debe devolver las coordenadas del objeto.
  test('the class should have its coordinates defined and they should be returned by the "getCoordinates" method', () => {
    expect(food.getCoordinates()).toEqual({ x: 20, y: 15 });
  });

  // 2. El método "getColor" tiene que devolver una string.
  test('the class should have its color defined and it should be returned by the "getColor" method', () => {
    expect(food.getColor()).toEqual('red');
  });

  // 3. El método "checkLifespan" debe devolver false siempre que la propiedad lifespan sea mayor que 0.
  test('while the property "lifespan" is bigger than 0, the "checkLifespan" method should return "false"', () => {
    expect(food.checkLifespan()).toEqual(false);
  });

  // 4. El método "checkLifespan" debe devolver true siempre que la propiedad lifespan sea menor o igual que 0.
  test('when the property "lifespan" is equal or smaller than 0, the "checkLifespan" method should return "true"', () => {
    expect(food.checkLifespan()).toEqual(true);
  });

  // 5. El método "onCollision" debe aumentar la puntuación en 100 puntos.
  test('the "onCollision" method should invoke the "updateScore" method and add 100 to the score', () => {
    food.onCollision();
    expect(scoreEngine.getScore()).toEqual(100);
  });

  // 7. El método "onCollision" debe hacer crecer la serpiente en 1 unidad.
  // test('the "onCollision" method should invoke the "growSnake" method and make the snake grow by 1', () => {});
});
