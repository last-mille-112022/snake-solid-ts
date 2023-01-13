import type { Coordinates } from '../../ui/render-engine';
import { Food } from './food';
import type { Item } from './item';

export class ItemGenerator {
  #boardSize: Coordinates;
  #lifespan: number;
  #itemList: Item[];

  constructor(boardSize: Coordinates, frames: number, difficulty: number) {
    this.#boardSize = boardSize;
    this.#lifespan = frames * difficulty;
    this.#itemList = [];
  }

  generateFood() {
    this.#itemList.push(new Food(this.#boardSize, this.#lifespan));
  }

  checkItemList() {
    this.#itemList.forEach((item, i) => {
      if (item.checkLifespan()) {
        this.#itemList.slice(i, 1);
      }
    });
  }
}
