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
export type SavedGamesFromStorage = {
  games: SavedGame[];
};

export const noStatisticsFoundMessage = 'no statistics were found';

export type SnakeSavedData = SavedGame | GameReport;

export type SnakeGameItems = Record<string, Coordinates>;

export interface WritableStorage<K extends SnakeSavedData> {
  saveLastGames(data: K): Promise<void>;
  saveLastStatistics(data: K): Promise<void>;
}

export interface ReadableStorage {
  readLastGames(): Promise<string>;
  readLastStatistics(): Promise<string>;
}

export interface StorageClient
  extends ReadableStorage,
    WritableStorage<SnakeSavedData> {}
