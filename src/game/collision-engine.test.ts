import { ConsoleCollisionEngine } from './collision-engine';

describe('Given a CollisionEngine class', () => {
  test('when two collisionable items have different coordinates, then the checkCollision function should return false', () => {
    const collisionEngine = new ConsoleCollisionEngine();
    expect(
      collisionEngine.checkCollision(
        {
          getCoordinates: () => ({ x: 10, y: 10 }),
        },
        {
          getCoordinates: () => ({ x: 1, y: 1 }),
        }
      )
    ).toBe(false);
  });
  test('when two collisionable items have same coordinates, then the checkCollision function should return true', () => {
    const collisionEngine = new ConsoleCollisionEngine();
    expect(
      collisionEngine.checkCollision(
        {
          getCoordinates: () => ({ x: 10, y: 10 }),
        },
        {
          getCoordinates: () => ({ x: 10, y: 10 }),
        }
      )
    ).toBe(true);
  });
});
