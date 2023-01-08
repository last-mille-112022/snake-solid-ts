import type { Coordinates } from '../../ui/render-engine';
import { CollisionResult, type Item } from './item.interface';

export class Food implements Item {
  #coordinates: Coordinates;
  #color: string;
  #lifespan: number;
  #boardXsize: number;
  #boardYsize: number;

  constructor(lifespan: number, boardXsize: number, boardYsize: number) {
    this.#coordinates = this.generateCoordinates();
    this.#color = 'red';
    this.#lifespan = lifespan; // Nos llega de forma externa, la comida no tiene por qué saber cómo se ha decidido su tiempo de desaparición
    this.#boardXsize = boardXsize; // Nos llega de forma externa, la comida no tiene por qué saber el ancho del tablero
    this.#boardYsize = boardYsize; // Nos llega de forma externa, la comida no tiene por qué saber el alto del tablero
  }

  generateCoordinates(): Coordinates {
    return {
      x: Math.floor(Math.random() * this.#boardXsize),
      y: Math.floor(Math.random() * this.#boardYsize),
    };
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  getColor(): string {
    return this.#color;
  }

  // Método que se ejecuta a cada frame del juego y devuelve true cuando haya pasado el tiempo de vida que tiene la comida.
  // Cuando el ItemRenderEngine reciba el true deberá borrar el objeto de la lista de items y dejar de renderizarlo.
  checkLifespan(): boolean {
    this.#lifespan -= 1;
    return this.#lifespan <= 0;
  }

  // Método que es llamado cuando la serpiente colisiona con el objeto.
  // Devuelve la string correspondiente del enum "CollisionResult" (definido en ./item-interface.ts).
  // Sirve para que las clases Snake y Score puedan definir qué acciones quieren realizar al colisionar con este ítem.
  onCollision(): CollisionResult {
    return CollisionResult.FoodCollision;
  }
}
