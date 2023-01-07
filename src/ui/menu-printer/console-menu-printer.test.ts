/* eslint-disable @typescript-eslint/no-empty-function */
import { ConsoleMenuPrinter } from './console-menu-printer';

jest.mock('node:readline/promises', () => ({
  createInterface: () => ({ question: jest.fn().mockResolvedValue('1') }),
}));
describe('Given a Console Menu Printer class', () => {
  const options = ['First test option', 'Second test option'];
  const printer = new ConsoleMenuPrinter(options, 'SNAKE MENU OPTIONS');
  describe('When the user wants to print a menu with options', () => {
    test('Then it should be printed in console the options with an index', () => {
      const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => {});
      let optionString = '';
      options.forEach((question, index) => {
        optionString += '\n' + (index + 1).toString() + '.' + question;
      });
      const expectedText = '\nSNAKE MENU OPTIONS\n' + optionString;

      printer.printMenuOptions();

      expect(consoleMock).toHaveBeenCalledWith(expectedText);
    });
  });

  describe('When the user selects an option', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('Then the chosen option should be returned', async () => {
      const result = await printer.readUserAnswer();
      expect(result).toBe(options[0]);
    });
  });
});
