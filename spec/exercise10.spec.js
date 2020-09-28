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
    const word='no';
    for (let idx = 0; idx < word.length; idx++) {
      const element = word[idx];
      linkList.add(element);
    }
    const result=linkList.isPalindrome();
    expect(result).toBe(false);
  });
  it(' Palindrome length 2 (even)', function() {
    const word='nn';
    for (let idx = 0; idx < word.length; idx++) {
      const element = word[idx];
      linkList.add(element);
    }
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it('NO Palindrome length 3 (odd)', function() {
    const word='nfl';
    for (let idx = 0; idx < word.length; idx++) {
      const element = word[idx];
      linkList.add(element);
    }
    const result=linkList.isPalindrome();
    expect(result).toBe(false);
  });
  it(' Palindrome length 3 (odd)', function() {
    const word='wow';
    for (let idx = 0; idx < word.length; idx++) {
      const element = word[idx];
      linkList.add(element);
    }
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
    const word='rrerr';
    for (let idx = 0; idx < word.length; idx++) {
      const element = word[idx];
      linkList.add(element);
    }
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
  it(' Palindrome even in middle in rear odd', function() {
    const word='rrriirrr';
    for (let idx = 0; idx < word.length; idx++) {
      const element = word[idx];
      linkList.add(element);
    }
    const result=linkList.isPalindrome();
    expect(result).toBe(true);
  });
});
