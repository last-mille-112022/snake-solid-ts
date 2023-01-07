
interface Menu {
  printOptions(): Promise<void>;
  // #getOptionsNames(): string[];
  // #getItemByName(methodName: string): MenuItem;
}

export default Menu;
