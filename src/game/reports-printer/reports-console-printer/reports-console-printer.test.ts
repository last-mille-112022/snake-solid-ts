import { type ReadableStorage } from '../../../storage/storage.models';
import ReportsConsolePrinter from './reports-console-printer';

describe('Given a reports console printer', () => {
  afterEach(() => jest.clearAllMocks());

  const reportsPrinter = new ReportsConsolePrinter();
  const consoleMock = jest.spyOn(console, 'log').mockImplementation(jest.fn());
  test('When the user wants to see the game statistics, then they should be consoled', done => {
    const mockedData = { reports: [{ date: 'test', playedTime: 0, score: 0 }] };
    const { date, playedTime, score } = mockedData.reports[0];
    const expectedMessage = `On the ${date} you played ${playedTime} seconds and scored ${score} points`;
    const mockedStorage: ReadableStorage = {
      readLastGame: async () => new Promise(() => {}),
      readLastStatistics: jest.fn().mockResolvedValue(JSON.stringify(mockedData)),
    };

    reportsPrinter.printReports(mockedStorage);

    setImmediate(() => {
      expect(consoleMock).toHaveBeenCalledWith(expectedMessage);
      done();
    });
  });

  test('And when the statistics can not be found, then an error should be consoled', done => {
    const error = new Error('test error');
    const mockedStorage: ReadableStorage = {
      readLastGame: async () => new Promise(jest.fn()),
      readLastStatistics: jest.fn().mockRejectedValue(error),
    };

    reportsPrinter.printReports(mockedStorage);

    setImmediate(() => {
      expect(consoleMock).toHaveBeenCalledWith(error);
      done();
    });
  });
});
