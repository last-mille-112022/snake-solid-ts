import type MenuItemStructure from './menu-item.model';

class MenuItem implements MenuItemStructure {
  constructor(
    private readonly name: string,
    private readonly gameController: () => void,
  ) {}

  getName(): string {
    return this.name;
  }

  execute(): void {
    this.gameController();
  }
}

export default MenuItem;
