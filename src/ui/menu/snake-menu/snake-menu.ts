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

  #executeChosenOption(menuItem: MenuItem): void {
    menuItem.execute();
  }

  async printOptions(): Promise<void> {
    const chosenOption = await this.#printer.readUserAnswer();
    this.#executeChosenOption(this.#getItemByName(chosenOption));
  }

  #getOptionsNames(): string[] {
    return this.#items.map(item => item.getName());
  }

  #getItemByName(methodName: string) {
    const optionSelected = this.#items.filter(
      item => item.getName() === methodName,
    );
    return optionSelected[0];
  }
}

// const printer = new ConsoleMenuPrinter();
// const submenu = new SubMenuMenuItem(printer, 'testing', [new StartGameMenuItem('start', new GameController())]);
// const myMenu = new SnakeMenu([submenu, new StartGameMenuItem('start2', new GameController())], printer, 'probando menu');
// const tryFucntion = async () => {
//   await myMenu.printOptions();
// };

// void tryFucntion();

export default SnakeMenu;
