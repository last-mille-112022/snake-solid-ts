import type MenuItemStructure from './menu-item.model';

class MenuItem implements MenuItemStructure {
  constructor(private readonly name: string, private readonly handler: () => void) {}

  getName(): string {
    return this.name;
  }

  execute(): void {
    this.handler();
  }
}

export default MenuItem;
