import fs from 'node:fs/promises';
import {
  noStatisticsFoundMessage,
  type GameReport,
  type ReadableStorage,
  type ReportsFromStorage,
} from '../../storage.models';

class JsonReportGenerator implements ReadableStorage {
  constructor(
    private readonly originPath: string,
    private readonly destinationPath: string,
  ) {}

  async readLastGames(): Promise<string> {
    return 'in progress';
  }

  async readLastStatistics(): Promise<string> {
    return 'in progress';
  }

  async read(): Promise<string> {
    const reportsFromFile = await fs.readFile(this.originPath, {
      encoding: 'utf-8',
      flag: 'a+',
    });
    if (reportsFromFile) {
      const { data: reports } = JSON.parse(reportsFromFile) as ReportsFromStorage;
      await this.#generateReport(reports);
      return this.destinationPath;
    }

    return noStatisticsFoundMessage;
  }

  async #generateReport(reports: GameReport[]) {
    // debugger;
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
