import * as fs from 'fs/promises';
import {
  mockedSavedGames,
  mockedSingleSavedGame,
} from '../../../../__mocks__/games.mocks';
import {
  mockedSingleStatistic,
  mockedStatistics,
} from '../../../../__mocks__/statistics.mocks';
import { type SnakeSavedData } from '../../../storage.models';
import { JsonFileSystemStorageClient } from './json-file-system-storage-client';

jest.mock('fs/promises', () => ({
  writeFile: jest.fn(),
  readFile: jest.fn(),
}));

const mockedFs = jest.mocked(fs);

const testFsReadFile = (path: string) => {
  expect(mockedFs.readFile).toHaveBeenCalledWith(path, {
    encoding: 'utf-8',
    flag: 'a+',
  });
};

const testFsWriteFile = (
  path: string,
  data: SnakeSavedData[],
  typeOfData: 'games' | 'reports',
) => {
  expect(mockedFs.writeFile).toHaveBeenCalledWith(
    path,
    JSON.stringify({ [typeOfData]: data }),
    { encoding: 'utf-8', flag: 'w+' },
  );
};

const statisticsPath = './game-saved-data/statistics/statistics.json';
const gamesPath = './game-saved-data/games/games.json';

describe('Given a json file system storage client', () => {
  const jsonFileSystemStorage = new JsonFileSystemStorageClient();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('when the storage reads last statistics', () => {
    it('it should read from statistics folder', async () => {
      await jsonFileSystemStorage.readLastStatistics();
      testFsReadFile(statisticsPath);
    });
    it('and data exists it should return the last statistics', async () => {
      mockedFs.readFile.mockImplementation(async () =>
        Promise.resolve(JSON.stringify(mockedStatistics)),
      );
      const statistics = await jsonFileSystemStorage.readLastStatistics();
      testFsReadFile(statisticsPath);
      expect(JSON.parse(statistics)).toEqual(mockedStatistics);
    });
  });

  describe('when the storage reads last games', () => {
    it('it should read them from games folder', async () => {
      await jsonFileSystemStorage.readLastGames();
      testFsReadFile(gamesPath);
    });
    it('and data exists it should return the last games', async () => {
      mockedFs.readFile.mockImplementation(async () =>
        Promise.resolve(JSON.stringify(mockedSavedGames)),
      );
      const games = await jsonFileSystemStorage.readLastGames();
      testFsReadFile(gamesPath);
      expect(JSON.parse(games)).toEqual(mockedSavedGames);
    });
  });

  it('when the storage saves last games it should save them in games folder', async () => {
    mockedFs.readFile.mockImplementation(async () =>
      Promise.resolve(JSON.stringify(mockedSavedGames)),
    );
    await jsonFileSystemStorage.saveLastGames(mockedSingleSavedGame);
    testFsReadFile(gamesPath);
    const { games } = mockedSavedGames;
    games.push(mockedSingleSavedGame);
    testFsWriteFile(gamesPath, games, 'games');
  });

  it('when the storage saves last statistics it should save them in statistics folder', async () => {
    mockedFs.readFile.mockImplementation(async () =>
      Promise.resolve(JSON.stringify(mockedStatistics)),
    );
    await jsonFileSystemStorage.saveLastStatistics(mockedSingleStatistic);

    testFsReadFile(statisticsPath);
    const { reports } = mockedStatistics;
    reports.push(mockedSingleStatistic);
    testFsWriteFile(statisticsPath, reports, 'reports');
  });
});
