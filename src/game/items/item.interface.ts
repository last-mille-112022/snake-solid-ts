import { type Drawable } from '../../ui/render-engine';

export enum CollisionResult {
  FoodCollision = 'FOOD',
  RottenFoodCollision = 'ROTTEN FOOD',
  MineCollision = 'MINE',
}

export interface Item extends Drawable {
  checkLifespan: () => boolean;
  onCollision: () => CollisionResult;
}
