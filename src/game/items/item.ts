import type { Coordinates, Drawable } from '../../ui/render-engine';

export abstract class Item implements Drawable {
  #coordinates: Coordinates;
  #color: string;
  protected lifespan: number;

  constructor(position: Coordinates, color: string, lifespan: number) {
    this.#coordinates = position;
    this.#color = color;
    this.lifespan = lifespan;
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  getColor(): string {
    return this.#color;
  }

  checkLifespan(): boolean {
    this.lifespan -= 1;
    return this.lifespan <= 0;
  }

  abstract onCollision(): void;
}
