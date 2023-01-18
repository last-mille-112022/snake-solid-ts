import fs from 'node:fs/promises';
import {
  noStatisticsFoundMessage,
  type GameReport,
  type ReadableStorage,
  type ReportsFromStorage,
} from '../../storage.models';

class JsonReportGenerator {
  destinationPath: string;
  constructor(private readonly storage: ReadableStorage) {
    this.destinationPath = './game-saved-data/reports/reports.json';
  }

  async generateReport(): Promise<string> {
    const reportsFromFile = await this.storage.readLastStatistics();
    if (reportsFromFile) {
      const { reports } = JSON.parse(reportsFromFile) as ReportsFromStorage;
      await this.#writeReport(reports);
      return this.destinationPath;
    }

    return noStatisticsFoundMessage;
  }

  async #writeReport(reports: GameReport[]) {
    await fs.writeFile(
      this.destinationPath,
      JSON.stringify({ reports }, null),
      {
        encoding: 'utf-8',
        flag: 'w+',
      },
    );
  }
}
export default JsonReportGenerator;
