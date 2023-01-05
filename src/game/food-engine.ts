import { type Coordinates } from './../ui/render-engine';
import { ItemRenderEngine } from './item-render-engine.js';

export class SnakeFood {
  // #foodCoordinates: Coordinates = { x: 0, y: 0 };
  // #foodDuration = 1000;
  #maxCells = 20;

  #foodCoordinates: Coordinates;
  #foodColor: string;
  #generateTime: number;
  #removeTime: number;
  #itemRenderEngine: ItemRenderEngine;

  constructor() {
    this.#itemRenderEngine = new ItemRenderEngine();
    this.#foodCoordinates = { x: 0, y: 0 };
    this.#foodColor = 'red';
    this.#generateTime = 1500;
    this.#removeTime = 2000;
  }

  generateFood() {
    setInterval(() => {
      this.generateRandomPositions();
      this.#itemRenderEngine.drawItem({
        getCoordinates: () => this.#foodCoordinates,
        getColor: () => this.#foodColor,
      });
    }, this.#generateTime);
  }

  removeFood() {
    setInterval(() => {
      this.#itemRenderEngine.eraseItem();
    }, this.#removeTime);
  }

  // setFoodDuration(time: number) {
  //   this.#foodDuration = time;
  //   setInterval(() => {
  //     this.removeFood();
  //   }, this.#foodDuration);
  // }

  // startGenerator() {
  //   this.generateRandomPositions();
  //   this.drawFood(this.#foodCoordinates);
  //   this.setFoodDuration(this.#foodDuration);
  // }

  generateRandomPositions() {
    this.#foodCoordinates = {
      x: Math.floor(Math.random() * this.#maxCells),
      y: Math.floor(Math.random() * this.#maxCells),
    };
  }
}
