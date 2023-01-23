import { type ReadableStorage } from '../../storage/storage.models';

interface ReportsPrinter {
  printReports(storage: ReadableStorage): void;
}

export default ReportsPrinter;
