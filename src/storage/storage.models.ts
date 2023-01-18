/* eslint-disable @typescript-eslint/indent */
import { type Coordinates } from '../ui/render-engine';

export type SavedGame = {
  snakePosition: Coordinates[];
  items: SnakeGameItems[];
};

export type GameReport = {
  date: number;
  score: number;
  playedTime: number;
};
export type ReportsFromStorage = {
  data: SnakeSavedData[];
};

export const noStatisticsFoundMessage = 'no statistics were found';

export type SnakeSavedData = SavedGame | GameReport;

export type SnakeGameItems = Record<string, Coordinates>;

export interface WritableStorage<K extends SnakeSavedData> {
  // save(data: K, path: string): Promise<void>;
  saveLastGames(data: K): Promise<void>;
  saveLastStatistics(data: K): Promise<void>;
}

export interface ReadableStorage {
  // read(path: string): Promise<string>;
  readLastGames(): Promise<string>;
  readLastStatistics(): Promise<string>;
}

export interface StorageClient
  extends ReadableStorage,
    WritableStorage<SnakeSavedData> {
  // saveLastGames(data: SavedGame): Promise<void>;
  // saveLastStatistics(data: GameReport): Promise<void>;
  // readLastGames(): Promise<string>;
  // readLastStatistics(): Promise<string>;
}
