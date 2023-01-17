import type { Coordinates, Drawable } from '../../ui/render-engine';

export abstract class Item implements Drawable {
  #boardSize: Coordinates;
  #coordinates: Coordinates;
  #color: string;
  #lifespan: number;

  constructor(boardSize: Coordinates, color: string, lifespan: number) {
    this.#boardSize = boardSize;
    this.#coordinates = this.generateCoordinates();
    this.#color = color;
    this.#lifespan = lifespan;
  }

  generateCoordinates(): Coordinates {
    return {
      x: Math.floor(Math.random() * this.#boardSize.x),
      y: Math.floor(Math.random() * this.#boardSize.y),
    };
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  getColor(): string {
    return this.#color;
  }

  checkLifespan(): boolean {
    this.#lifespan -= 1;
    return this.#lifespan <= 0;
  }

  abstract onCollision(): void;
}
