import { type Drawable } from '../ui/render-engine';

export class Queue {
  #queue: Drawable[];
  constructor() {
    this.#queue = [];
  }

  queue(value: Drawable) {
    this.#queue.push(value);
    return this.#queue;
  }

  unqueue() {
    this.#queue.shift();
    return this.#queue;
  }
}
