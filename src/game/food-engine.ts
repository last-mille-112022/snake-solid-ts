import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine';
import { type Coordinates } from './../ui/render-engine';

export interface FoodEngine {
  drawFood: (coordinates: Coordinates) => void;
  getFoodPosition: () => Coordinates;
  removeFood: () => void;
  startGenerator: () => void;
  generateRandomPositions: () => void;
  setFoodDuration: (time: number) => void;
}

export class SnakeFood implements FoodEngine {
  #tablero = new ConsoleRenderEngine();
  #foodCoordinates: Coordinates = { x: 0, y: 0 };
  #foodDuration = 1000;
  #maxCells = 20;

  constructor() {
    this.startGenerator();
  }

  drawFood(coordinates: Coordinates) {
    this.#foodCoordinates = coordinates;
    this.#tablero.drawElement({
      getCoordinates: () => coordinates,
      getColor: () => 'red',
    });
    this.#tablero.render();
  }

  getFoodPosition() {
    return this.#foodCoordinates;
  }

  removeFood() {
    this.#tablero.drawElement({
      getCoordinates: () => this.#foodCoordinates,
      getColor: () => 'black',
    });
    this.generateRandomPositions();
    this.drawFood(this.#foodCoordinates);
    this.#tablero.render();
  }

  setFoodDuration(time: number) {
    this.#foodDuration = time;
    setInterval(() => {
      this.removeFood();
    }, this.#foodDuration);
  }

  startGenerator() {
    this.generateRandomPositions();
    this.drawFood(this.#foodCoordinates);
    this.setFoodDuration(this.#foodDuration);
  }

  generateRandomPositions() {
    this.#foodCoordinates = {
      x: Math.floor(Math.random() * this.#maxCells),
      y: Math.floor(Math.random() * this.#maxCells),
    };
  }
}
