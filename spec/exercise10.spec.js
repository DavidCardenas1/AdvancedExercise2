const LinkedList = require('../exercise10/exercise10');
describe('exercise 10', function() {
  let linkList = null;
  beforeEach(() => {
    linkList = new LinkedList();
  });
  afterEach(() => {
    linkList = null;
  });
  it('no Palindrome length 2 (even)', function() {
    linkList.add('n');
    linkList.add('o');
    const result=linkList.isPalindrome();
    expect(result).toBe(false);
  });
  it(' Palindrome length 2 (even)', function() {
    linkList.add('n');
    linkList.add('n');
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it('NO Palindrome length 3 (odd)', function() {
    linkList.add('n');
    linkList.add('f');
    linkList.add('l');
    const result=linkList.isPalindrome();
    expect(result).toBe(false);
  });
  it(' Palindrome length 3 (odd)', function() {
    linkList.add('w');
    linkList.add('o');
    linkList.add('w');
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it(' Palindrome length 3 (odd) same number', function() {
    linkList.add(1);
    linkList.add(1);
    linkList.add(1);
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it(' Palindrome length (odd) different middle', function() {
    linkList.add('r');
    linkList.add('r');
    linkList.add('e');
    linkList.add('r');
    linkList.add('r');
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it(' Palindrome even in middle in rear odd', function() {
    linkList.add('r');
    linkList.add('r');
    linkList.add('r');
    linkList.add('w');
    linkList.add('w');
    linkList.add('r');
    linkList.add('r');
    linkList.add('r');
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it('length 1', function() {
    linkList.add('w');
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it('length 0', function() {    
    const result=linkList.isPalindrome();
    expect(result).toBe(false);
  });
});
