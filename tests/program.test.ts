import Program from "../src/program";

test("Program is defined", () => {
  expect(Program).toBeDefined();
});

// Testing using mock functions
test("jestMockFunctions", () => {
  const mockFn = jest.fn((num) => 42 + num);
  Program.jestMockFunctions([100, 101], mockFn);

  // Expect that the callback func was called twice, once for each number in the numbers array
  expect(mockFn.mock.calls.length).toBe(2);

  // Expect that the first call was called with arg 100 and second with 101
  expect(mockFn.mock.calls[0][0]).toBe(100);
  expect(mockFn.mock.calls[1][0]).toBe(101);

  // Expect that the first call returned with a result 142
  expect(mockFn.mock.results[0].value).toBe(142);
});
