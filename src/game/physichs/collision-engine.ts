import { type Collisionable } from '../../ui/render-engine';

interface CollisionEngine {
  checkCollision: (coordinatesA: Collisionable, coordinatesB: Collisionable) => boolean;
}

export class ConsoleCollisionEngine implements CollisionEngine {
  checkCollision(coordinatesA: Collisionable, coordinatesB: Collisionable): boolean {
    return (
      // eslint-disable-next-line
      JSON.stringify(coordinatesA.getCoordinates()) ===
      JSON.stringify(coordinatesB.getCoordinates())
    );
  }
}
