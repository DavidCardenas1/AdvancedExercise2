const LoadingBar = require('../exercise22/exercise22');
describe('exercise 22', function() {
  let ld = null;
  beforeEach(() => {
    ld = new LoadingBar(10);
  });
  afterEach(() => {
    ld = null;
  });
  it('init ', function() {
    expect(ld.size).toBe(10);
    expect(ld.bar_length).toBe(2);
  });

  it('draw bar in', function() {
    expect(ld.draw(2))
        .toBe('\u2591\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591');
  });
  it('reset values', function() {
    ld.cursor = 10;
    ld.tail = 8;
    ld.reset();
    expect(ld.cursor).toBe(0);
    expect(ld.tail).toBe(0);
  });
  it('get part of bar', () => {
    const result = ld.get_bar(4, '*');
    expect(result).toBe('****');
  });
});
