import { Food } from './food';

describe('Given a Food class', () => {
  let food: Food;

  beforeAll(() => {
    food = new Food(20, 100, 100);
  });

  // 1. Cuando instanciamos la clase, se tienen que generar unas coordenadas aleatorias.
  // test('when we create a new instance of the class, then the "generateCoordinates" method should create random coordinates', () => {});

  // 2. El método "getCoordinates" tiene que devolver unas coordenadas.
  // test('the class should have its coordinates defined and they should be returned by the "getCoordinates" method', () => {});

  // 3. El método "getColor" tiene que devolver una string.
  test('the class should have its color defined and it should be returned by the "getColor" method', () => {
    expect(food.getColor()).toEqual('red');
  });

  // 4. El método "checkLifespan" debe devolver false siempre que la propiedad lifespan sea mayor que 0.
  // test('while the property "lifespan" is bigger than 0, the "checkLifespan" method should return "false"', () => {});

  // 5. El método "checkLifespan" debe devolver true siempre que la propiedad lifespan sea menor o igual que 0.
  // test('when the property "lifespan" is equal or smaller than 0, the "checkLifespan" method should return "true"', () => {});

  // 6. El método "onCollision" debe devoler la string correspondiente del enum "CollisionResult".
  test('the "onCollision" method should return the correct string from the "CollisionResult" enum', () => {
    expect(food.onCollision()).toEqual('FOOD');
  });
});
