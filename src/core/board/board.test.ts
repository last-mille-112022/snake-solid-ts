import { boardLimitsMock } from './../constants/board-constants';
import { Board } from './board';

describe('Given a game board', () => {
  describe('When initialized with certain (small) dimentions', () => {
    const board = new Board({ x: 10, y: 2 });
    it('Then the board limits should be created', () => {
      expect(board.getBoardLimitsCoordinates()).toEqual(
        expect.arrayContaining(boardLimitsMock),
      );
    });
  });
});
