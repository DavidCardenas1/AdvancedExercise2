describe('exercise 4', function() {
  it('only one parent multiple result', function() {
    const result = querySelectorAll('div.note < input.is-complete[checked]');
    expect(result).toEqual(['<div id="3" class="note"><input type="checkbox" class="is-complete" checked=""></div>',
      '<div id="5" class="note"><input type="checkbox" class="is-complete" checked=""></div>']);
  });
  it('two parents', function() {
    const result = querySelectorAll('.note < .child a span.some_class');
    expect(result).toEqual(['<div id="1" class="note"><div class="child"><a> <span class="some_class">yes</span> </a></div></div>']);
  });
  it('no classes or id', function() {
    const result = querySelectorAll('div < span.child');
    expect(result).toEqual(['<div><span id="child" class="child"></span></div>']);
  });
  it(' id', function() {
    const result = querySelectorAll('#child');
    console.log(result);
    expect(result).toEqual(['<span id="child" class="child"></span>']);
  });
});

