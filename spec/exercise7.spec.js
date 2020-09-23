const largestArea = require('../exercise7/exercise7');
describe('exercise 7', function() {
  it('Histogram  mayor area in a column ', function() {
    bin = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 1, 0, 1, 1],
      [0, 1, 1, 1, 0],
    ];
    const result=largestArea(bin);
    expect(result).toBe(5);
  });
  it('Histogram  mayor area in  columns ', function() {
    bin = [
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 1, 1, 1, 1],
    ];
    const result=largestArea(bin);
    expect(result).toBe(10);
  });
  it('Histogram  mayor area in a row ', function() {
    bin = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 0],
    ];
    const result=largestArea(bin);
    expect(result).toBe(5);
  });
  it('Histogram  mayor area in  rows ', function() {
    bin = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
    ];
    const result=largestArea(bin);
    expect(result).toBe(6);
  });
  it('Histogram  1 mayor area ', function() {
    bin = [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
    ];
    const result=largestArea(bin);
    expect(result).toBe(1);
  });
  it('Histogram  seperate by 0 ', function() {
    bin = [
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1],
    ];
    const result=largestArea(bin);
    expect(result).toBe(8);
  });
  it('Histogram  differents areas  ', function() {
    const binMatrix = [
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    ];
    const result=largestArea(binMatrix);
    expect(result).toBe(22);
  });
});
