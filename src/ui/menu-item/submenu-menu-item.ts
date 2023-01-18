import { type MenuPrinter } from '../menu-printer/menu-printer.model';
import SnakeMenu from '../menu/snake-menu/snake-menu';
import type MenuItem from './menu-item.model';

class SubMenuMenuItem implements MenuItem {
  constructor(
    private readonly printer: MenuPrinter,
    private readonly name: string,
    private readonly options: MenuItem[],
  ) {}

  getName(): string {
    throw new Error('Method not implemented.');
  }

  async execute(): Promise<void> {
    const menu = new SnakeMenu(this.options, this.printer, this.name);
    await menu.printOptions();
  }
}

export default SubMenuMenuItem;
