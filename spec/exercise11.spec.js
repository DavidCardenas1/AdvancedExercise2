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
  it('obj with instance', function() {
    const obj = {a: {x:new Number(1)}};
    const result=set(obj, 'a.x.c.d', 42);
    expect(result).toEqual(jasmine.objectContaining({
     a:{x:{c:{d:42}}}
    }));
  });

  it('obj with function', function() {
    const obj = {a: {x: ()=>{}}};
    const result=set(obj, 'a.x.y', 123);
    expect(result.a.x.y).toEqual(123);
  });
  it('obj with array', function() {
    const obj = {a: {myarr: []}};
    const result=set(obj, 'a.myarr.0.value', 123);
    expect(result).toEqual(jasmine.objectContaining({
         a: {myarr: [{value: 123}]}
    }));
  });

//   
  it('obj without obj path lenght > 1 NO replace ', function() {
    const obj = {
      path: {to:{a:{b: {},
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
  it('error property false', function() {
    const obj = {a: {x: false}};
    expect( function() {
      set(obj, 'a.x.c.d', 42);
    } ).toThrow(new Error('Not object'));
  });
});
