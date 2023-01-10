import { CollisionResult } from '../../game/items/item.interface';
import { ConsoleRenderEngine } from './../console-render/console-render-engine';
import { ItemRenderEngine } from './item-render-engine';

let board: ConsoleRenderEngine;
let itemRenderEngine: ItemRenderEngine;

describe('Given a ItemRenderEngine class', () => {
  beforeEach(() => {
    board = new ConsoleRenderEngine();
    itemRenderEngine = new ItemRenderEngine(board);
  });
  // 1. La clase debe recibir objetos y meterlos en la lista de ítems renderizables.
  test('When I add and element to the list, Then the element should be in the list', () => {
    const element = {
      getCoordinates: () => ({ x: 0, y: 0 }),
      getColor: () => 'red',
      checkLifespan: () => false,
      onCollision: () => CollisionResult.FoodCollision,
    };
    expect(itemRenderEngine.addItem(element)).toStrictEqual([element]);
  });
  // 2. La clase debe renderizar en el juego todos los elementos que existan en la lista de ítems renderizables.
  // test('When I have various elements in the list, Then the list should be rendered', () => {
  //   const element1 = {
  //     getCoordinates: () => ({ x: 0, y: 0 }),
  //     getColor: () => 'red',
  //   };
  //   const element2 = {
  //     getCoordinates: () => ({ x: 10, y: 10 }),
  //     getColor: () => 'red',
  //   };
  //   itemRenderEngine.addItem(element1);
  //   itemRenderEngine.addItem(element2);
  //   expect(itemRenderEngine.renderItems());
  // });
  // 3. La clase debe llamar al método "checkLifespan" de cada ítem de la lista y eliminar aquellos cuyo método devuelva true.
  test('When the checkLifeSpan method from the item returns true, Then the item should be temoved from the list', () => {
    const element1 = {
      getCoordinates: () => ({ x: 0, y: 0 }),
      getColor: () => 'red',
      checkLifespan: () => true,
      onCollision: () => CollisionResult.FoodCollision,
    };
    const element2 = {
      getCoordinates: () => ({ x: 0, y: 0 }),
      getColor: () => 'red',
      checkLifespan: () => false,
      onCollision: () => CollisionResult.FoodCollision,
    };

    expect(itemRenderEngine.addItem(element1)).toStrictEqual([element1]);
    expect(itemRenderEngine.addItem(element2)).toStrictEqual([element1, element2]);
    expect(itemRenderEngine.checkItemList()).toStrictEqual([element2]);
  });
});
