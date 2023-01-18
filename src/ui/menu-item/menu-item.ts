import { type GameController } from '../../game/game-controller';
import type MenuItemStructure from './menu-item.model';

class MenuItem implements MenuItemStructure {
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

export default MenuItem;
