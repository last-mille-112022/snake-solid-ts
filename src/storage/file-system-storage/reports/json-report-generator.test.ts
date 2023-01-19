import * as fs from 'node:fs/promises';
import { noStatisticsFoundMessage } from '../../storage.models';
import { JsonFileSystemStorageClient } from '../storage-client/file-system-storage-client/json-file-system-storage-client';
import JsonReportGenerator from './json-report-generator';

const destinationPath = './game-saved-data/reports/reports.json';

jest.mock('node:fs/promises', () => ({
  writeFile: jest.fn(),
  readFile: jest.fn(),
}));

const mockedFs = jest.mocked(fs);

describe('Given a JsonReportGenerator', () => {
  describe('When a user wants to obtain a report in Json format', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('and statics exists it should obtain the data from storage, generate report and return the path to file', async () => {
      const storageClient = new JsonFileSystemStorageClient();
      const jsonReporterGenerator = new JsonReportGenerator(storageClient);
      const storageSpy = jest
        .spyOn(storageClient, 'readLastStatistics')
        .mockResolvedValue(
          JSON.stringify({
            reports: [
              { date: 23455, score: 234, playedTime: 2345 },
              { date: 23442423, score: 24242, playedTime: 65464 },
              { date: 2234242455, score: 65464, playedTime: 645646 },
            ],
          }),
        );
      const reportPath = await jsonReporterGenerator.generateReport();
      expect(reportPath).toEqual(destinationPath);
      expect(storageSpy).toHaveBeenCalled();
      expect(mockedFs.writeFile).toHaveBeenCalled();
    });
    it('and there are no statitics it should show the message "statistics not found', async () => {
      const storageClient = new JsonFileSystemStorageClient();
      const jsonReporterGenerator = new JsonReportGenerator(storageClient);
      const storageSpy = jest.spyOn(storageClient, 'readLastStatistics');
      const reportPath = await jsonReporterGenerator.generateReport();
      expect(reportPath).toEqual(noStatisticsFoundMessage);
      expect(storageSpy).toHaveBeenCalled();
      expect(mockedFs.writeFile).not.toHaveBeenCalled();
    });
  });
});
