import {
  type GameReport,
  type ReportsFromStorage,
} from '../storage/storage.models';

export const mockedStatistics: ReportsFromStorage = {
  reports: [
    { date: 999999, score: 234, playedTime: 2345 },
    { date: 999999, score: 24242, playedTime: 65464 },
    { date: 99999999, score: 65464, playedTime: 645646 },
    { date: 999999, score: 24242, playedTime: 65464 },
  ],
};

export const mockedSingleStatistic: GameReport = {
  date: 99999999,
  score: 65464,
  playedTime: 645646,
};
