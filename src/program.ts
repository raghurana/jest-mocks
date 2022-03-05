export default class Program {
  static main(): void {
    console.log("Hello world !!");
  }

  static jestMockFunctions(items: number[], callback: Function) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
}

Program.main();
