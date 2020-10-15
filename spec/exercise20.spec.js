describe('exercise 20', function() {
  const container = document.getElementById('container').children[0];
  beforeEach(() => {
    reset();
  });
  afterEach(() => {
    reset();
  });
  it('test 1 triangle child', function() {
    drawTriangles(1);
    const [result] = container.cloneNode(true).children;
    expect(result.children.length).toBe(1);
  });
  it('test 1 triangle child className', function() {
    drawTriangles(1);
    const [result] = container.cloneNode(true).children;
    expect(result.className).toBe('row');
    expect(result.children[0].className).toBe('triangle');
  });
  it('test 1 triangle size', function() {
    drawTriangles(1);
    const [result] = container.cloneNode(true).children;
    expect(result.children.length).toBe(1);
    const size = getComputedStyle(document.documentElement)
        .getPropertyValue('--size');
    expect(size).toBe('160px');
  });
  it('test 2 triangle children', function() {
    drawTriangles(2);
    const [result] = container.cloneNode(true).children;
    expect(result.children[0].children.length).toBe(1);
    expect(result.children[1].children.length).toBe(2);
  });
  it('test 2 triangle children className', function() {
    drawTriangles(2);
    const [result] = container.cloneNode(true).children;
    expect(result.children[0].children[0].className).toBe('row');
    expect(result.children[0].children[0].
        children[0].className).toBe('triangle');
  });
  it('test 2 triangle children size', function() {
    drawTriangles(2);
    container.cloneNode(true).children;
    const size = getComputedStyle(document.documentElement)
        .getPropertyValue('--size');
    expect(size).toBe('80px');
  });
});
