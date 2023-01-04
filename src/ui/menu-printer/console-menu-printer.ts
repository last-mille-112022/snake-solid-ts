import * as readline from 'node:readline/promises';
import type { MenuPrinter } from './menu-printer.model';

export class ConsoleMenuPrinter implements MenuPrinter {
  #options: string[];

  constructor(options: string[]) {
    this.#options = options;
  }

  setOptions(options: string[]) {
    this.#options = options;
  }

  printMenuOptions(): void {
    let optionString = '';
    this.#options.forEach((question, index) => {
      optionString += '\n' + (index + 1).toString() + '.' + question;
    });
    console.log('\nSNAKE MENU OPTIONS\n' + optionString);
  }

  async readUserAnswer(): Promise<string> {
    const rl = readline.createInterface(process.stdin, process.stdout);
    let answer = 0;
    this.printMenuOptions();
    answer = Number(await rl.question('\nChoose an option '));
    while (answer < 1 || answer > this.#options.length + 1 || isNaN(answer)) {
      // eslint-disable-next-line no-await-in-loop
      answer = Number(await rl.question('\nPlease choose a valid option '));
    }

    return this.#options[answer - 1];
  }
}
