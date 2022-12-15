import { GameController } from './game-controller';

describe('Game Controller', () => {
  let gameController: GameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  it('should be defined', () => {
    expect(gameController).toBeDefined();
  });

  it('when start the game it should .....', () => {
    gameController.start();
  });
});
