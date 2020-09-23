const largestArea = require('../exercise7/exercise7');
describe('exercise 7', function() {
  it('Histogram  mayor area in 1 column ', function() {
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
  it('Histogram  mayor area in 2 columns ', function() {
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
  it('Histogram  mayor area in 1 row ', function() {
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
  it('Histogram  mayor area in  2 rows ', function() {
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
  it('Histogram  all 0', function() {
    bin = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const result=largestArea(bin);
    expect(result).toBe(0);
  });

});
