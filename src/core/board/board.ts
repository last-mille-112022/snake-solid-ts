import { type Coordinates, type Drawable } from './../../ui/render-engine.js';

export class Board {
  boardLimits: Drawable[];
  limitX: number;
  limitY: number;

  constructor({ x, y }: Coordinates) {
    this.limitX = x;
    this.limitY = y;
    this.boardLimits = this.generateBoardLimits(this.limitX, this.limitY);
  }

  private generateBoardLimits(x: number, y: number) {
    return [];
  }
}
