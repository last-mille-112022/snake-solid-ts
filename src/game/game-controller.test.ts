import {
  type Drawable,
  type KeyHandler,
  type MoveHandler,
  type SnakeRenderEngine,
} from '../ui/render-engine';
import { GameController } from './game-controller';

class MockRender implements SnakeRenderEngine {
  render(): void {
    console.log('RENDER');
  }

  drawElement(_element: Drawable): void {
    console.log('drawElement');
  }

  clearGameScreen(): void {
    console.log('clearGameScreen');
  }

  showGameOver(): void {
    console.log('showGameOver');
  }

  addExitListener(_listener: KeyHandler): void {
    console.log('addExitListener');
  }

  addMoveListener(_listener: MoveHandler): void {
    console.log('addMoveListener');
  }

  addKeyListener(_key: string, _listener: KeyHandler): void {
    console.log('addKeyListener');
  }

  updateScore(_score: number): void {
    console.log('updateScore');
  }

  resetScore(): void {
    console.log('resetScore');
  }
}

describe('Game Controller', () => {
  let gameController: GameController;

  beforeEach(() => {
    gameController = new GameController(new MockRender());
  });

  it('should be defined', () => {
    expect(gameController).toBeDefined();
  });

  it('when start the game it should .....', () => {
    jest.useFakeTimers();
    gameController.start();
  });
});
