import type MenuItem from '../menu-item/menu-item.model';

interface Menu {
  executeChosenOption(menuItem: MenuItem): void;
  printOptions(): Promise<void>;
  getOptionsNames(): string[];
  getItemByName(methodName: string): MenuItem;
}

export default Menu;
