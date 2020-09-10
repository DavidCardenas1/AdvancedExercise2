describe('exercise 4', function() {
  let result = [];
  afterEach(function() {
    result = [];
  });
  it('only one parent multiple result', function() {
    const preResult = querySelectorAll('div.note < input.is-complete[checked]');
    preResult.forEach((elm) => {
      result.push(elm.outerHTML);
    });
    expect(result).toEqual(['<div id="3" class="note"><input type="checkbox" class="is-complete" checked=""></div>',
      '<div id="5" class="note"><input type="checkbox" class="is-complete" checked=""></div>']);
  });
  it('two parents', function() {
    const preResult = querySelectorAll('.note < .child a span.some_class');
    preResult.forEach((elm) => {
      result.push(elm.outerHTML);
    });
    expect(result).toEqual(['<div id="1" class="note"><div class="child"><a> <span class="some_class">yes</span> </a></div></div>']);
  });
  it('no classes or id', function() {
    const preResult = querySelectorAll('div < span.child');
    preResult.forEach((elm) => {
      result.push(elm.outerHTML);
    });
    expect(result).toEqual(['<div><span id="child" class="child"></span></div>']);
  });
  it(' id', function() {
    const preResult = querySelectorAll('#child');
    preResult.forEach((elm) => {
      result.push(elm.outerHTML);
    });
    expect(result).toEqual(['<span id="child" class="child"></span>']);
  });
});

