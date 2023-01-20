import blessed from 'blessed';
import {
  type Drawable,
  type KeyHandler,
  type MoveHandler,
  type SnakeRenderEngine,
} from '../render-engine';

/**
 * Snake render engine into the CMD
 */
export class ConsoleRenderEngine implements SnakeRenderEngine {
  #screen: blessed.Widgets.Screen;
  #gameContainer: blessed.Widgets.BoxElement;
  #scoreContainer: blessed.Widgets.BoxElement;

  constructor() {
    this.#screen = blessed.screen({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      smartCSR: true,
    });

    this.#gameContainer = blessed.box(this.#createGameBox());
    this.#scoreContainer = blessed.box(this.#createScoreBox());
    this.updateScore(0);
  }

  addExitListener(listener: KeyHandler): void {
    this.#screen.key(['escape', 'q', 'C-c'], () => {
      listener();
    });
  }

  addMoveListener(listener: MoveHandler): void {
    this.#screen.on('keypress', (_, key) => {
      listener({ isCtrl: key.ctrl, isShift: key.shift, name: key.name ?? key.full });
    });
  }

  addKeyListener(key: string, listener: KeyHandler): void {
    this.#screen.key(key, () => {
      listener();
    });
  }

  updateScore(score: number) {
    this.#scoreContainer.setLine(0, `{bold}Score:{/bold} ${score}`);
  }

  resetScore() {
    this.#scoreContainer.detach();
    this.#scoreContainer = blessed.box(this.#createScoreBox());
    this.updateScore(0);
  }

  clearGameScreen() {
    this.#gameContainer.detach();
    this.#gameContainer = blessed.box(this.#createGameBox());
  }

  drawElement(item: Drawable) {
    blessed.box({
      parent: this.#gameContainer,
      top: item.getCoordinates().y,
      left: item.getCoordinates().x,
      width: 1,
      height: 1,
      style: {
        fg: item.getColor(),
        bg: item.getColor(),
      },
    });
  }

  render() {
    this.#screen.render();
  }

  showGameOver(): void {
    this.#gameContainer = blessed.box(this.#createGameOverBox());
  }

  #createGameBox(): blessed.Widgets.BoxOptions {
    return {
      parent: this.#screen,
      top: 1,
      left: 0,
      width: '100%',
      height: '100%-1',
      style: {
        fg: 'black',
        bg: 'black',
      },
    };
  }

  #createScoreBox(): blessed.Widgets.BoxOptions {
    return {
      parent: this.#screen,
      top: 0,
      left: 'left',
      width: '100%',
      height: 1,
      tags: true,
      style: {
        fg: 'white',
        bg: 'blue',
      },
    };
  }

  #createGameOverBox(): blessed.Widgets.BoxOptions {
    return {
      parent: this.#screen,
      top: 'center',
      left: 'center',
      width: 20,
      height: 6,
      tags: true,
      valign: 'middle',
      content: '{center}Game Over!\n\nPress enter to try again{/center}',
      border: {
        type: 'line',
      },
      style: {
        fg: 'black',
        bg: 'magenta',
        border: {
          fg: '#ffffff',
        },
      },
    };
  }
}
