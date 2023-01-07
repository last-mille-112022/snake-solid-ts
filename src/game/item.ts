export interface Item {
  getLifespan: (time: number) => void;
  removeItem: () => void;
  onCollision: () => void;
}
