import { type ReportGenerator } from '../../../storage/file-system-storage/reports/report-generator.model';
import { JsonFileSystemStorageClient } from '../../../storage/file-system-storage/storage-client/file-system-storage-client/file-system-storage-client.js';
import { type GameReport, type ReadableStorage, type ReportsFromStorage } from '../../../storage/storage.models';

class ReportsConsolePrinter implements ReportGenerator {
  generate = async (storage: ReadableStorage) => {
    const data = (JSON.parse(await storage.readLastStatistics())) as ReportsFromStorage;
    const { data: gameReports } = data;
    (gameReports as GameReport[]).forEach(({ date, playedTime, score }) => {
      console.log(`On the ${date} you played ${playedTime} seconds and scored ${score} points`);
    });
  };
}

const storage = new JsonFileSystemStorageClient();
const reportsPrinter = new ReportsConsolePrinter();
void reportsPrinter.generate(storage);

export default ReportsConsolePrinter;
