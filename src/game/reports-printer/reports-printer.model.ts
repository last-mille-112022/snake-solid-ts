import { type ReadableStorage } from '../../storage/storage.models';

interface ReportsGenerator {
  generateReport(storage: ReadableStorage): Promise<void>;
}

export default ReportsGenerator;
