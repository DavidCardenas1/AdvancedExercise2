const printTree = require('../exercise3/exercise3');
describe('exercise 3 ', () => {
  it('infix with no childs and no right child', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    const result = printTree(bTree);
    expect(result).toEqual(['D', 'B', 'E', 'A', 'H', 'F', 'I', 'C', 'G', 'J']);
  });
  it('prefix with no childs and no right child', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    const result = printTree(bTree, 'prefix');
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'H', 'I', 'G', 'J']);
  });
  it('postfix with no childs and no right child', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    const result = printTree(bTree, 'postfix');
    expect(result).toEqual(['D', 'E', 'B', 'H', 'I', 'F', 'J', 'G', 'C', 'A']);
  });
  it('infix with  no left child ', () => {
    const bTree = '(A,(B,,(E)),(C,(F,,(I)),(G,,(J))))';
    const result = printTree(bTree);
    expect(result).toEqual(['B', 'E', 'A', 'F', 'I', 'C', 'G', 'J']);
  });
  it('infix with no right child', () => {
    const bTree = '(A,(B,(D),),(C,(F,(H),),)';
    const result = printTree(bTree);
    expect(result).toEqual(['D', 'B', 'A', 'H', 'F', 'C']);
  });
});
/** Tree:
*              A
*            /   \
*           B     C
*         /  \   /  \
*        D      F    
*              / \    \
*             H       
'infix' (default) | 'prefix' | 'postfix'
*/
