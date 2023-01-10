import type { Item } from '../../game/items/item.interface';
import type { SnakeRenderEngine } from '../render-engine';

export class ItemRenderEngine {
  #board;
  #itemList: Item[];

  constructor(renderEngine: SnakeRenderEngine) {
    this.#board = renderEngine;
    this.#itemList = [];
  }

  addItem(item: Item) {
    this.#itemList.push(item);
    this.renderItems();
    return this.#itemList;
  }

  renderItems() {
    // eslint-disable-next-line
    this.#itemList.forEach((element) => {
      this.#board.drawElement(element);
      this.#board.render();
    });
  }

  // Se ejecutará a cada frame del juego, iterará sobre la #itemList y llamará al método "checkLifespan" de cada objeto.
  // Eliminará del array los ítems cuyo método "checkLifespan" devuelva true. Si no están en el array, no se renderizan.
  checkItemList() {
    this.#itemList.forEach((item, i) => {
      if (item.checkLifespan()) {
        this.#itemList.slice(i, 1);
      }
    });
    return this.#itemList;
  }
}
