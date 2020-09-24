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
  it('loop in the second element', function() {
    linkList.add(0);
    linkList.add(1);
    linkList.addNode(linkList.getInPosition(1));
    const result= linkList.checkLoops();
    expect(result).toEqual(jasmine.objectContaining({
      element: 1,
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
