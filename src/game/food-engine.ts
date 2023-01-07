import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine';
import { type Coordinates } from './../ui/render-engine';
import { type Item } from './item';

export class Food implements Item {
  #maxCells = 20;
  #foodCoordinates: Coordinates;
  #foodColor: string;
  #lifespan = 0;
  #tablero;
  // #generateTime: number;
  // #removeTime: number;
  // #itemRenderEngine: ItemRenderEngine;

  constructor() {
    this.#tablero = new ConsoleRenderEngine();
    // this.#itemRenderEngine = new ItemRenderEngine();
    this.#foodCoordinates = this.generateRandomPositions();
    this.#foodColor = 'red';
    // this.#generateTime = 1500;
    // this.#removeTime = 2000;
  }

  getLifespan(time: number) {
    this.#lifespan = time;
  }

  removeItem() {
    setTimeout(() => {
      this.#tablero.drawElement({
        getCoordinates: () => this.#foodCoordinates;
      });
      this.#tablero.render();
    });
  }

  onCollision() {
    // sumPoints(100);
    // snakeGrow(1);
  }

  // generateFood() {
  //   setInterval(() => {
  //     this.generateRandomPositions();
  //     this.#itemRenderEngine.drawItem({
  //       getCoordinates: () => this.#foodCoordinates,
  //       getColor: () => this.#foodColor,
  //     });
  //   }, this.#generateTime);
  // }

  // removeFood() {
  //   setInterval(() => {
  //     this.#itemRenderEngine.eraseItem();
  //   }, this.#removeTime);
  // }

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
    return {
      x: Math.floor(Math.random() * this.#maxCells),
      y: Math.floor(Math.random() * this.#maxCells),
    };
  }
}
