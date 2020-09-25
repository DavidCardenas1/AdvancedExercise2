const LinkedList = require('../exercise9/exercise9');
describe('exercise 9', function() {
  let linkList = null;
  beforeEach(()=> {
    linkList = new LinkedList();
  });
  afterEach(()=>{
    linkList=null;
  });

  it('loop in the first element', function() {
    linkList.add(0);
    linkList.addNode(linkList.getInPosition(0));
    const result= linkList.checkLoops();
    expect(result).toEqual(jasmine.objectContaining({
      element: 0,
    }));
  });
  it('loop in  even circle', function() {
    linkList.add(0);
    linkList.add(1);
    linkList.add(2);
    linkList.addNode(linkList.getInPosition(2));
    const result= linkList.checkLoops();
    expect(result).toEqual(jasmine.objectContaining({
      element: 2,
    }));
  });
  it('loop in odd circle', function() {
    linkList.add(0);
    linkList.add(1);
    linkList.add(2);
    linkList.add(3);
    linkList.add(4);
    linkList.add(5);
    linkList.addNode(linkList.getInPosition(3));
    const result= linkList.checkLoops();
    expect(result).toEqual(jasmine.objectContaining({
      element: 3,
    }));
  });
  it('try to insert one node after the loop', function() {
    linkList.add(0);
    linkList.add(1);
    linkList.add(2);
    linkList.add(3);
    linkList.add(4);
    linkList.add(5);
    linkList.addNode(linkList.getInPosition(2));
    expect(linkList.addNode(linkList.getInPosition(4))).toBe(null)
    const result= linkList.checkLoops();
    expect(result).toEqual(jasmine.objectContaining({
      element: 2,
    }));
  });
  it('No loop', function() {
    linkList.add(0);
    linkList.add(1);
    linkList.add(3);
    const result= linkList.checkLoops();
    expect(result).toEqual(null);
  });
});
