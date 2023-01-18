import { type SavedGamesFromStorage } from '../storage/storage.models';

export const mockedSavedGames: SavedGamesFromStorage = {
  games: [
    {
      items: [],
      snakePosition: [
        { x: 3, y: 5 },
        { x: 6, y: 5 },
      ],
    },
    {
      items: [],
      snakePosition: [
        { x: 9, y: 9 },
        { x: 9, y: 9 },
        { x: 9, y: 9 },
        { x: 9, y: 9 },
      ],
    },
  ],
};

export const mockedSingleSavedGame = { items: [], snakePosition: [] };
