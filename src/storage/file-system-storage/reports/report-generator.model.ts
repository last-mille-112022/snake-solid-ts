import { type ReadableStorage } from '../../storage.models';

export interface ReportGenerator {
  generate: (storage: ReadableStorage) => Promise<void>;
}
