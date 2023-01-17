/**
 * This clase is responsable of control the game
 */
export class GameController {
  start() {
    const board = new ConsoleRenderEngine();
    board.render();
  }
}
