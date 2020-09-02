/**
 * represents node for the tree
 */
class Node {
  /**
     *
     * @param {String} data
     */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
/**
 * Binary Tree class
 */
class BinaryTree {
  /**
     * result save order infix,prefix,postfix
     */
  constructor() {
    this.root = null;
    this.result= [];
  }
  /**
   *
   * @param {String} data
   * @param {String} direction
   * @param {Node} currentNode
   * @return {Node} to keep sequence
   */
  insert(data, direction, currentNode) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    } else {
      if (direction === 'left') {
        return this.insertNodeLeft(currentNode, newNode);
      } else {
        return this.insertNodeRight(currentNode, newNode);
      }
    }
  }
  /**
   *
   * @param {Node} node current Node
   * @param {Node} newNode new Node
   * @return {Node} return new current Node
   */
  insertNodeLeft(node, newNode) {
    if (node.left) {
      this.insertNodeLeft(node.left, newNode);
    } else {
      node.left = newNode;
      return node.left;
    }
  }
  /**
   *
   * @param {Node} node current Node
   * @param {Node} newNode new Node
   * @return {Node} return new current Node
   */
  insertNodeRight(node, newNode) {
    if (node.right) {
      this.insertNodeRight(node.right, newNode);
    } else {
      node.right = newNode;

      return node.right;
    }
  }
  /**
 *
 * @param {Node} node
 */
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      this.result.push(node.data);
      this.inorder(node.right);
    }
  }
  /**
 *
 * @param {Node} node
 */
  preorder(node) {
    if (node !== null) {
      this.result.push(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  /**
 *
 * @param {Node} node
 */
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      this.result.push(node.data);
    }
  }
}

/** Tree:
*              A
*            /   \
*           B     C
*         /  \   /  \
*        D    E F    G
*              / \    \
*             H   I    J
*/
const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; /**

///A
//B,(D,E)
* (VAL, LN, RN)
* VAL = Value
* LN = Left Node
* RN = Right Node
*/
/**
* @param {String} tree
* @param {String} order  'infix' (default) | 'prefix' | 'postfix'
* @return {Array} result
*/
function printTree(tree, order='infix') {
  const binTree = new BinaryTree();
  const currentNode = binTree.root;

  const builtTree = (string, direction, current) => {
    const {parent, left, right} = getParentLeftRight(string);

    if (!parent) {
      return;
    }
    current = binTree.insert(parent, direction, current);
    if (left) {
      builtTree(left, 'left', current);
    }
    if (right) {
      builtTree(right, 'right', current);
    }

    return;
  };

  builtTree(tree, 'root', currentNode);
  if (order==='infix') {
    binTree.inorder(binTree.root);
  }
  if (order==='prefix') {
    binTree.preorder(binTree.root);
  }
  if (order==='postfix') {
    binTree.postorder(binTree.root);
  }
  // console.log(binTree.result);
  return binTree.result;
}
/**
 *
 * @param {String} string
 * @return {Object} nodeParent and childs left rigth
 */
function getParentLeftRight(string) {
  string = string.substring(1, string.length - 1);
  const parent = string[0];
  const start = 2;
  let left; let right;
  let countParentheses = 0;
  for (let idx = start; idx < string.length; idx++) {
    const charValue = string[idx];
    if (charValue === '(') {
      countParentheses++;
    }
    if (charValue === ')') {
      countParentheses--;
    }

    if (countParentheses === 0) {
      left = string.substring(start, idx + 1);
      right = string.substring(idx + 2, string.length);
      if (left === ',') {
        left = undefined;
        right = string.substring(idx + 1, string.length);
      }
      break;
    }
  }
  // console.log(right);
  return {parent, left, right};
}
printTree(bTree, 'infix');

module.exports=printTree;
