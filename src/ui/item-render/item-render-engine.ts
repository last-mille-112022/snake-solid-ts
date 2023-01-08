import type { Drawable, SnakeRenderEngine } from '../render-engine';

export class ItemRenderEngine {
  #board;
  #itemList: Drawable[];

  constructor(renderEngine: SnakeRenderEngine) {
    this.#board = renderEngine;
    this.#itemList = [];
  }

  addItem(item: Drawable) {
    this.#itemList.push(item);
  }

  renderItems() {
    // eslint-disable-next-line
    this.#itemList.forEach((element) => {
      this.#board.drawElement(element);
    });
  }

  checkItemList() {
    // Se ejecutará a cada frame del juego, iterará sobre la #itemList y llamará al método "checkLifespan" de cada objeto.
    // Eliminará del array los ítems cuyo método "checkLifespan" devuelva true. Si no están en el array, no se renderizan.
  }
}
