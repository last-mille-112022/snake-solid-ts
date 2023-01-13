/**
 * A coordinate in its UI container
 */
export type Coordinates = {
  x: number;
  y: number;
};

/**
 * Represents a key pressed into the UI
 */
export type Key = {
  isCtrl: boolean;
  isShift: boolean;
  name: string;
};

export type KeyHandler = () => void;
/**
 * Movement handler to be invoke as listener
 * @param key: the key pressed by the user. It has the name and if ctrl or shift where pressed
 */
export type MoveHandler = (key: Key) => void;

/**
 * Elements that implements this interface can be drawn into the UI
 */
export interface Drawable extends Collisionable {
  getColor(): string;
}

export interface Collisionable {
  getCoordinates(): Coordinates;
}

export interface RenderScorable {
  /**
   * Changes the score into the UI without re-rendering.
   * @param score the new score
   */
  updateScore(score: number): void;
  /**
   * Restart the score without re-rendering
   */
  resetScore(): void;
}

/**
 * Abstraction about what an snake render engine should be
 */
export interface SnakeRenderEngine extends RenderScorable {
  /**
   * Refresh de UI re-rendering its content
   */
  render(): void;
  /**
   * Adds a simple element in the UI with size 1x1. It does not re-renders the ui
   * @param element the element to be draw
   */
  drawElement(element: Drawable): void;
  /**
   * Removes all elements in the game container. It does not re-render the ui
   */
  clearGameScreen(): void;
  /**
   * Updates the game container to show the game over box. It does not re-render the ui
   */
  showGameOver(): void;
  /**
   * Adds a handler when the users press exits keys. The current exits keys are:
   * 'escape', 'q' and 'Ctrl+c'
   * @param listener the callback to be invoked when the user press any exit key
   */
  addExitListener(listener: KeyHandler): void;
  /**
   * Adds listener for snake movements handler. When the user press any key this handler is invoked
   * @param listener the listener to be call when the user press any key. the pressed key is sent to the listener
   */
  addMoveListener(listener: MoveHandler): void;
  /**
   * Adds a handler when the users press the input key. The current exits keys are:
   * @param key the key name to be listened when the user press it. Exampl: 'a'
   * @param listener the callback to be invoked when the user press the key
   */
  addKeyListener(key: string, listener: KeyHandler): void;
}
