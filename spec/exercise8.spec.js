const balanceSum = require('../exercise8/exercise8');
describe('exercise 8', function() {
  it('one value array', function() {
    const arr = [1, 1];
    const result = balanceSum(arr);
    expect(result).toBe(0);
  });
  it('same value even', function() {
    const arr = [1, 1, 1, 1];
    const result = balanceSum(arr);
    expect(result).toBe(1);
  });
  it('same value odd', function() {
    const arr = [1, 1, 1, 1, 1];
    const result = balanceSum(arr);
    expect(result).toBe(-1);
  });
  it('differents values even balance', function() {
    const arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
    const result = balanceSum(arr);
    expect(result).toBe(6);
  });
  it('differents values even not balance', function() {
    const arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 10];
    const result = balanceSum(arr);
    expect(result).toBe(-1);
  });
  it('differents values odd not balance', function() {
    const arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13, 2];
    const result = balanceSum(arr);
    expect(result).toBe(-1);
  });
  it('differents values odd balance', function() {
    const arr = [1, 2, 3, 4, 9, 9, 2, 7, 23];
    const result = balanceSum(arr);
    expect(result).toBe(6);
  });
  it('balance in the first position', function() {
    const arr = [15, 2, 3, 5, 1, 2, 2];
    const result = balanceSum(arr);
    expect(result).toBe(0);
  });
  it('balance in the last position', function() {
    const arr = [2, 2, 3, 5, 1, 2, 15];
    const result = balanceSum(arr);
    expect(result).toBe(5);
  });
});
