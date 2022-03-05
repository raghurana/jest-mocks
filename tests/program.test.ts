import Program from "../src/program";
import * as rm from "typed-rest-client";

// AutoMock typed-rest-client module
jest.mock("typed-rest-client");

test("Program is defined", () => {
  expect(Program).toBeDefined();
});

// Testing using mock functions
test("jestMockFunctions1 with fake impl", () => {
  const mockFn = jest.fn((num) => 42 + num);
  Program.jestMockFunctions1([100, 101], mockFn);

  // Expect that the callback func was called twice, once for each number in the numbers array
  expect(mockFn.mock.calls.length).toBe(2);

  // Expect that the first call was called with arg 100 and second with 101
  expect(mockFn.mock.calls[0][0]).toBe(100);
  expect(mockFn.mock.calls[1][0]).toBe(101);

  // Expect that the first call returned with a result 142
  expect(mockFn.mock.results[0].value).toBe(142);
});

// Testing using mock functions
test("jestMockFunctions2 with mock return val", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);
  const output = Program.jestMockFunctions2([100, 101, 102], mockFn);

  expect(mockFn.mock.calls.length).toBe(3);
  expect(mockFn.mock.calls[0][0]).toBe(100);
  expect(mockFn.mock.calls[1][0]).toBe(101);
  expect(mockFn.mock.calls[2][0]).toBe(102);

  expect(mockFn.mock.results[0].value).toBe(true);
  expect(mockFn.mock.results[1].value).toBe(false);
  expect(mockFn.mock.results[2].value).toBe(true);

  expect(output).toEqual(expect.arrayContaining([100, 102]));
});

// Testing using module mocks
test("jestMockModules1 to mock api calls with module mocks", async () => {
  const mockData = { name: "bob" };
  const mockedGetFn = rm.RestClient.prototype.get as jest.Mock;
  mockedGetFn.mockReturnValueOnce({ result: mockData });

  const output = await Program.jestMockModules1();

  expect(output.result).toMatchObject(mockData);
  expect(mockedGetFn.mock.calls.length).toBe(1);
});
