// const flattenArray = require('../exercise2/exercise2');
const flattenArray = require('../exercise2/exercise2Imperative');
describe('exercise 2 ', () => {
  it('4 layers in a array', () => {
    const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('every value is an array', () => {
    const input = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('normal array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = flattenArray(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('no values', () => {
    const input = [];
    const result = flattenArray(input);
    expect(result).toEqual([]);
  });
});
