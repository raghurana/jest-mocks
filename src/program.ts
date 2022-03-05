export default class Program {
  static main(): void {
    console.log("Hello world !!");
  }

  static jestMockFunctions1(items: number[], callback: Function) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  static jestMockFunctions2(items: number[], callback: (item: number) => boolean): number[] {
    return items.filter(callback);
  }
}

//Program.main();
