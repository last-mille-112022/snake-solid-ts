import { ConsoleMenuPrinter } from './console-menu-printer';
import { type MenuPrinter } from './menu-printer.model';

describe('For console menu printer module', () => {
  let options: string[];
  let menuPrinter: MenuPrinter;

  beforeEach(() => {
    options = ['Start Game', 'End Game'];
    menuPrinter = new ConsoleMenuPrinter(options);
  });
  it('should print menu options', () => {
    const menuPrinterSpy = jest.spyOn(menuPrinter, 'printMenuOptions');
    menuPrinter.printMenuOptions();
    expect(menuPrinterSpy).toHaveBeenCalled();
  });

  it('should get the user answer', async () => {
    // const readlineObj = { ...readline };

    // const readlineSpy = jest
    //   .spyOn(readlineObj, 'createInterface')
    //   .mockImplementation({
    //     question: async () => Promise.resolve('1'),
    //   } as any);

    const readUserAnswerSpy = jest
      .spyOn(menuPrinter, 'readUserAnswer')
      .mockReturnValue(Promise.resolve(options[0]));
    const answer = await menuPrinter.readUserAnswer();

    // expect(readlineSpy).toHaveBeenCalled();
    expect(readUserAnswerSpy).toHaveBeenCalled();
    expect(answer).toEqual(options[0]);
  });
});
