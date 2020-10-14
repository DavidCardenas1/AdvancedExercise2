describe('exercise 20', function() {
  const t1 = document.getElementById('t1');
  beforeEach(()=>{
    t1.textContent = '';
  });
  afterEach(()=>{
    t1.textContent = '';
  });
  it('test 2 triangle className', function() {
    const triangle = document.createElement('div');
    const result = deep(triangle, 1, 2);
    expect(result.className).toBe('wraper');
    expect(result.children[0].className).toBe('triangles');
  });
  it('test 2 triangle lenght childs', function() {
    const triangle = document.createElement('div');
    const result = deep(triangle, 1, 2);
    expect(result.children.length).toBe(3);
  });
  it('test 2 triangle size children', function() {
    const container = document.getElementById('container');
    t1.appendChild(deep(t1, 1, 2));
    document.body.append(container);
    const wraper= getComputedStyle(t1.children[0]);
    const triangle= getComputedStyle(t1.children[0].children[0]);
    expect(wraper.height).toBe('160px');
    expect(triangle.width).toBe('80px');
  });
  it('test 3 triangle lenght childs', function() {
    const triangle = document.createElement('div');
    const result = deep(triangle, 1, 3);
    expect(result.children[0].children[0].children.length).toBe(3);
    expect(result.children[1].children[0].children.length).toBe(3);
    expect(result.children[2].children[0].children.length).toBe(3);
  });
  it('test 3 triangle size children', function() {
    const container = document.getElementById('container');
    t1.appendChild(deep(t1, 1, 3));
    document.body.append(container);
    const wraper= getComputedStyle(t1.children[0].children[0]);
    const triangle= getComputedStyle(t1.children[0].
        children[0].children[0].children[0]);
    expect(wraper.height).toBe('80px');
    expect(triangle.width).toBe('40px');
  });
});
