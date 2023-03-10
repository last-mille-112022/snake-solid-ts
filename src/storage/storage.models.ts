
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
  reports: GameReport[];
};
export type SavedGamesFromStorage = {
  games: SavedGame[];
};

export const noStatisticsFoundMessage = 'no statistics were found';

export type SnakeSavedData = SavedGame | GameReport;

export type SnakeGameItems = Record<string, Coordinates>;

export interface WritableStorage<K extends SnakeSavedData> {
  saveLastGame(data: K): Promise<void>;
  saveLastStatistics(data: K): Promise<void>;
}

export interface ReadableStorage {
  readLastGame(): Promise<string>;
  readLastStatistics(): Promise<string>;
}

export interface StorageClient extends ReadableStorage, WritableStorage<SnakeSavedData> {}
