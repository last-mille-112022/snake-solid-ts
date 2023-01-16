import * as fs from 'fs/promises';
import {
  type GameReport,
  type SnakeSavedData,
  type StorageClient,
} from '../../../storage.models';

export class JsonFileSystemStorageClient implements StorageClient {
  filePath: string;

  constructor() {
    this.filePath = './game-saved-data';
  }

  async readLastGames(): Promise<string> {
    return this.#read(this.filePath + '/games.json');
  }

  async readLastStatistics(): Promise<string> {
    return this.#read(this.filePath + '/statistics.json');
  }

  async saveLastGames(data: SnakeSavedData): Promise<void> {
    await this.#save(data, this.filePath + '/games.json');
  }

  async saveLastStatistics(data: GameReport): Promise<void> {
    await this.#save(data, this.filePath + '/reports.json');
  }

  async #save(data: SnakeSavedData, path: string): Promise<void> {
    await fs.writeFile(path, JSON.stringify({ data }, null), {
      encoding: 'utf-8',
      flag: 'w+',
    });
  }

  async #read(path: string): Promise<string> {
    const dataFromFile = await fs.readFile(path, {
      encoding: 'utf-8',
      flag: 'a+',
    });
    return dataFromFile;
  }
}
