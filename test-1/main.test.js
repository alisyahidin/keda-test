const { numberOne } = require("./main");

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