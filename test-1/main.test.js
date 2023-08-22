const { numberOne, numberTwo } = require("./main");

describe('test-1/number-1', () => {
  it('All positive number', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    expect(numberOne(input)).toEqual(input.sort((a, b) => b - a));
  })
  it('Mixed positive and negative number', () => {
    const input = [-1, 2, 4, 3, 0, -5, 3, 2, 1, 10];
    expect(numberOne(input)).toEqual(input.sort((a, b) => b - a));
  })
  it('All negative number', () => {
    const input = [-1, -2, -4, -3, -5, -3, -2, -1, -10, 0];
    expect(numberOne(input)).toEqual(input.sort((a, b) => b - a));
  })
})

describe('test-1/number-2', () => {
  it('Test case 1', () => {
    const input = [100, 200, 300, 400];
    expect(numberTwo(input, 2)).toEqual(700);
  })
  it('Test case 2', () => {
    const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    expect(numberTwo(input, 4)).toEqual(39);
  })
  it('Test case 3', () => {
    const input = [-3, 4, 0, -2, 6, -1];
    expect(numberTwo(input, 2)).toEqual(5);
  })
  it('Test Case 4', () => {
    const input = [-3, 4, 0, -2, 6, -1];
    expect(numberTwo(input, 6)).toEqual(4);
  })
  it('Negative Case', () => {
    const input = [-3, 4, 0, -2, 6, -1];
    expect(numberTwo(input, 7)).toEqual(0);
  })
})