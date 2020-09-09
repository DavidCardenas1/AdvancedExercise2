describe('exercise 4', function() {
  it('only one parent multiple result', function() {
    const result = querySelectorAll('div.note < input.is-complete[checked]');
    expect(result).toEqual(['<div id="3" class="note"><input type="checkbox" class="is-complete" checked=""></div>', 
    '<div id="5" class="note"><input type="checkbox" class="is-complete" checked=""></div>']);
  });
  it('two parents', function() {
    const result = querySelectorAll('.note < .child a span.some_class');
    expect(result).toEqual(['<div id="1" class="note"><p class="child">\n            <a> <span class="some_class">yes</span> </a></p></div>']);
  });
  it('no classes or id', function() {
    const result = querySelectorAll('div < span.child');
    expect(result).toEqual(['<div>\n            <span class="child"></span>\n        </div>']);
  });
});
