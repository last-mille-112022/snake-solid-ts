export interface MenuPrinter {
  printMenuOptions(): void;
  readUserAnswer(): Promise<string>;
  setOptions(options: string[]): void;
}
