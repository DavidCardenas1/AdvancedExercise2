/**
 *
 * @param {Object} tree
 * @return {boolean}
 */
function isSymetric(tree) {
  return tree.root === null || deepSearch(tree.root.left, tree.root.right);
}
/**
 *
 * @param {Object} left
 * @param {Object} right
 * @return {boolean}
 */
function deepSearch(left, right) {
  if (left === null && right === null) {
    return true;
  } else if (left != null && right != null) {
    return left.data === right.data &&
            deepSearch(left.left, right.right) &&
            deepSearch(left.right, right.left);
  }
  return false;
}
module.exports=isSymetric;
