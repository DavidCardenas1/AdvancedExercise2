/**
 *
 * @param {Array} arr
 * @return {Number}
 */
function balanceSum(arr) {
  let pointLeft = 0; let pointRight = arr.length - 1;
  let sumLeft = arr[0]; let sumRight = arr[arr.length - 1];
  while (pointLeft < pointRight) {
    if (sumLeft < sumRight) {
      pointLeft++;
      sumLeft = sumLeft + arr[pointLeft];
      if ((pointLeft + 1) === pointRight&&sumRight===sumLeft) {
        // console.log(pointLeft);
        return pointLeft;
      }
      continue;
    }
    if (sumRight <= sumLeft) {
      pointRight--;
      sumRight = sumRight + arr[pointRight];
      if ((pointRight-1)===pointLeft&&sumRight===sumLeft) {
        // console.log(pointLeft);
        return pointLeft;
      }
    }
  }
  // console.log(-1);
  return -1;
}
// const arr = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
// const arr2 = [1, 1, 2];
// const arr=[15, 2, 3, 5, 1, 2, 2];
// balanceSum(arr);
module.exports = balanceSum;
