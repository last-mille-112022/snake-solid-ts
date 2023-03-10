import type MenuItem from '../../menu-item/menu-item.model';
import { type MenuPrinter } from '../../menu-printer/menu-printer.model';
import type Menu from '../menu.model';

class SnakeMenu implements Menu {
  #items: MenuItem[];
  #printer: MenuPrinter;
  constructor(items: MenuItem[], printer: MenuPrinter, name: string) {
    this.#items = items;
    this.#printer = printer;
    printer.setOptions(this.#getOptionsNames());
    printer.setMenuName(name);
  }

  #executeChosenOption(menuItem?: MenuItem): void {
    menuItem?.execute();
  }

  async printOptions(): Promise<void> {
    this.#printer.printMenuOptions();
    const chosenOption = await this.#printer.readUserAnswer();
    this.#executeChosenOption(this.#getItemByName(chosenOption));
  }

  #getOptionsNames(): string[] {
    return this.#items.map(item => item.getName());
  }

  #getItemByName(methodName: string) {
    return this.#items.find(item => item.getName() === methodName);
  }
}

export default SnakeMenu;
