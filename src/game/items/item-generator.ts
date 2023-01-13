import type { Coordinates, RenderScorable } from '../../ui/render-engine';
import { Food } from './food';
import type { Item } from './item';

export class ItemGenerator {
  #boardSize: Coordinates;
  #lifespan: number;
  #itemList: Item[];
  #scoreEngine: RenderScorable;

  constructor(
    boardSize: Coordinates,
    frames: number,
    difficulty: number,
    scoreEngine: RenderScorable,
  ) {
    this.#boardSize = boardSize;
    this.#lifespan = frames * difficulty;
    this.#itemList = [];
    this.#scoreEngine = scoreEngine;
  }

  generateFood() {
    this.#itemList.push(new Food(this.#boardSize, this.#lifespan, this.#scoreEngine));
  }

  checkItemList() {
    this.#itemList.forEach((item, i) => {
      if (item.checkLifespan()) {
        this.#itemList = this.#itemList.splice(i, 1);
      }
    });
  }
}
