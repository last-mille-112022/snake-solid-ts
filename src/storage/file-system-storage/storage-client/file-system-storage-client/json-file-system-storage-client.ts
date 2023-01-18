import * as fs from 'fs/promises';
import {
  type GameReport,
  type ReportsFromStorage,
  type SavedGame,
  type SavedGamesFromStorage,
  type StorageClient,
} from '../../../storage.models';

export class JsonFileSystemStorageClient implements StorageClient {
  #filePath: string;

  constructor() {
    this.#filePath = './game-saved-data';
  }

  async readLastGames(): Promise<string> {
    return this.#read(this.#filePath + '/games/games.json');
  }

  async readLastStatistics(): Promise<string> {
    return this.#read(this.#filePath + '/statistics/statistics.json');
  }

  async saveLastGames(data: SavedGame): Promise<void> {
    const path = this.#filePath + '/games/games.json';
    const gamesFromStorage = await fs.readFile(path, {
      encoding: 'utf-8',
      flag: 'a+',
    });
    if (gamesFromStorage) {
      const { games } = JSON.parse(gamesFromStorage) as SavedGamesFromStorage;
      games.push(data);
      await fs.writeFile(path, JSON.stringify({ games }, null), {
        encoding: 'utf-8',
        flag: 'w+',
      });
    }
  }

  async saveLastStatistics(data: GameReport): Promise<void> {
    const path = this.#filePath + '/statistics/statistics.json';
    const reportsFromStorage = await fs.readFile(path, {
      encoding: 'utf-8',
      flag: 'a+',
    });
    if (reportsFromStorage) {
      const { reports } = JSON.parse(reportsFromStorage) as ReportsFromStorage;
      reports.push(data);
      await fs.writeFile(path, JSON.stringify({ reports }, null), {
        encoding: 'utf-8',
        flag: 'w+',
      });
    }
  }

  async #read(path: string): Promise<string> {
    const dataFromFile = await fs.readFile(path, {
      encoding: 'utf-8',
      flag: 'a+',
    });
    return dataFromFile;
  }
}
