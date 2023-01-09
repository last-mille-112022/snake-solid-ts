import { ConsoleMenuPrinter } from '../../menu-printer/console-menu-printer';
import SnakeMenu from '../../menu/snake-menu/snake-menu';

describe('Given the snake-menu class', () => {
  describe('When the user chooses to start the game', () => {
    test('Then the game should execute', async () => {
      const printer = new ConsoleMenuPrinter();
      printer.readUserAnswer = jest.fn().mockResolvedValue('test');
      const mockItem = { getName: jest.fn().mockReturnValue('test'), execute: jest.fn() };
      const snakeMenu = new SnakeMenu([mockItem], printer, 'testMenu');

      await snakeMenu.printOptions();

      expect(mockItem.execute).toHaveBeenCalled();
    });
  });
});
