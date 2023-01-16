import { type Coordinates, type Drawable } from './../../ui/render-engine.js';
import { BoardLimitsItem } from './board-limit-item';

export class Board {
  boardLimits: Drawable[];
  limitX: number;
  limitY: number;

  constructor({ x, y }: Coordinates) {
    this.limitX = x;
    this.limitY = y;
    this.boardLimits = this.generateBoardLimits(this.limitX, this.limitY);
  }

  public getBoardLimitsCoordinates() {
    const boardLimitsCoordinates = [];

    for (const boardLimit of this.boardLimits) {
      boardLimitsCoordinates.push(boardLimit.getCoordinates());
    }

    return boardLimitsCoordinates;
  }

  private generateBoardLimits(limitX: number, limitY: number) {
    const generatedBoardLimits = [];

    for (let x = 0; x <= limitX + 1; x++) {
      generatedBoardLimits.push(new BoardLimitsItem({ position: { x, y: 0 } }));
      generatedBoardLimits.push(
        new BoardLimitsItem({ position: { x, y: limitY + 1 } }),
      );
    }

    for (let y = 1; y <= limitY; y++) {
      generatedBoardLimits.push(new BoardLimitsItem({ position: { x: 0, y } }));
      generatedBoardLimits.push(
        new BoardLimitsItem({ position: { x: limitX + 1, y } }),
      );
    }

    return generatedBoardLimits;
  }
}
