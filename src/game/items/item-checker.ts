import type { Item } from './item';

export class ItemChecker {
  #itemList: Item[];

  constructor(itemList: Item[]) {
    this.#itemList = itemList;
  }

  checkItemList() {
    this.#itemList.forEach((item, i) => {
      if (item.checkLifespan()) {
        this.#itemList.splice(i, 1);
      }
    });
  }

  getItemList() {
    return this.#itemList;
  }
}
