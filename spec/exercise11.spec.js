const set = require('../exercise11/exercise11');
describe('exercise 11', function() {
  it('empty obj path lenght 1', function() {
    const obj = {
    };
    const result=set(obj, 'path', 42);
    expect(result).toEqual(jasmine.objectContaining({
      path: 42,
    }));
  });
  it('empty obj path lenght > 1 ', function() {
    const obj = {
    };
    const result=set(obj, 'path.a', 42);
    expect(result).toEqual(jasmine.objectContaining({
      path: {
        a: 42,
      },
    }));
  });
  it('obj with obj path lenght > 1  replace', function() {
    const obj = {
      a: {},
    };
    const result=set(obj, 'path.a', 42);
    expect(result).toEqual(jasmine.objectContaining({
      path: {
        a: 42,
      },
    }));
  });
  it('obj no obj path lenght > 1  replace', function() {
    const obj = {
      a: 'a',
    };
    const result=set(obj, 'path.a', 42);
    expect(result).toEqual(jasmine.objectContaining({
      path: {
        a: 42,
      },
    }));
  });
  it('obj without obj path lenght > 1 NO replace ', function() {
    const obj = {
      path: {
        to: {
          a: {
            b: {},
          },
        },
      },
    };
    const result=set(obj, 'path.to', 42);
    expect(result).toEqual(jasmine.objectContaining({
      path: {
        to: {
          a: {
            b: {},
          },
          to: 42,
        },
      },
    }));
  });
  it('error', function() {
    const obj = {
      path: 'err',
    };
    expect( function() {
      set(obj, 'path.err', 42);
    } ).toThrow(new Error('Not object'));
  });
});
