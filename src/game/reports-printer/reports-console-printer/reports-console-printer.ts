import { type ReadableStorage, type ReportsFromStorage } from '../../../storage/storage.models';
import type ReportsPrinter from '../reports-printer.model';

class ReportsConsolePrinter implements ReportsPrinter {
  printReports = (storage: ReadableStorage) => {
    storage
      .readLastStatistics()
      .then(data => {
        const { reports: gameReports } = JSON.parse(data) as ReportsFromStorage;
        gameReports
          .sort(({ score: a }, { score: b }) => a - b)
          .splice(gameReports.length - 2)
          .forEach(({ date, playedTime, score }) => {
            console.log(
              `On the ${date} you played ${playedTime} seconds and scored ${score} points`,
            );
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default ReportsConsolePrinter;
