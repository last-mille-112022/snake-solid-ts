import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
import { type Drawable } from '../ui/render-engine';
import { Queue } from './queue.js';

export class ItemRenderEngine {
  #tablero;
  #itemStructure: Queue;
  #itemQueue: Drawable[];

  constructor() {
    this.#tablero = new ConsoleRenderEngine();
    this.#itemStructure = new Queue();
    this.#itemQueue = [];
  }

  drawItem(item: Drawable) {
    this.#itemQueue = this.#itemStructure.queue(item);
    this.renderItems();
  }

  eraseItem() {
    this.#itemStructure.unqueue();
    this.renderItems();
  }

  renderItems() {
    this.#itemQueue.forEach((element) => {
      this.#tablero.drawElement(element);
      this.#tablero.render();
    });
    return this.#itemQueue;
  }
}
