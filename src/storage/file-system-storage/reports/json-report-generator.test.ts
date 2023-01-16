import fs from 'node:fs/promises';
import { mockedStatistics } from '../../../__mocks__/statistics.mocks';
import { noStatisticsFoundMessage } from '../../storage.models';
import JsonReportGenerator from './json-report-generator';

// Statistics exist
const mockedOriginPath = 'src/__mocks__/statistics.json';

const destinationPath = 'game-saved-data/reports/reports.json';

const mockedWriteFile = jest.fn();
// const mockedFsPromises = ;

jest.mock('node:fs/promises', () =>
  jest.fn().mockImplementation(() => ({
    readFile: jest.fn((path: string) => {
      if (path === mockedOriginPath) {
        return JSON.stringify(mockedStatistics);
      }
    }),
    writeFile: () => mockedWriteFile,
  })),
);

const mockedFs = jest.mocked(fs);

describe('Given a JsonReportGenerator', () => {
  describe('When a user wants to obtain a report in Json format', () => {
    it('and statics exists it should obtain the data from storage, generate report and return the path to file', async () => {
      const jsonReporterGenerator = new JsonReportGenerator(
        mockedOriginPath,
        destinationPath,
      );

      const reportPath = await jsonReporterGenerator.read();
      expect(reportPath).toEqual(destinationPath);
      expect(mockedFs.writeFile).toHaveBeenCalled();
    });
    it('and there are no statitics it should show the message "statistics not found', async () => {
      const jsonReporterGenerator = new JsonReportGenerator(
        '',
        destinationPath,
      );
      const reportPath = await jsonReporterGenerator.read();
      expect(reportPath).toEqual(noStatisticsFoundMessage);
    });
  });
});
