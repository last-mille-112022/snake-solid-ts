import { type GameController } from '../../game/game-controller';
import type MenuItem from './menu-item.model';

class StartGameMenuItem implements MenuItem {
  constructor(
    private readonly name: string,
    private readonly gameController: GameController,
  ) {}

  getName(): string {
    return this.name;
  }

  execute(): void {
    this.gameController.start();
  }
}

export default StartGameMenuItem;
