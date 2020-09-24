/**
 *
 * @param {Array} arr
 * @return {Number}
 */
function balanceSum(arr) {
    let pointLeft = 0; let pointRight = arr.length - 1;
    let sumLeft = arr[0]; let sumRight = arr[arr.length - 1];
    while (pointLeft < pointRight) {
        if ((pointRight - 1) === pointLeft && sumRight === sumLeft) {
            // console.log(pointLeft);
            return pointLeft;
        }
        if (sumLeft < sumRight) {
            pointLeft++;
            sumLeft = sumLeft + arr[pointLeft];
            if ((pointLeft + 1) === pointRight && sumRight === sumLeft) {
                // console.log(pointLeft);
                return pointLeft;
            }
            continue;
        }
        if (sumRight <= sumLeft) {
            pointRight--;
            sumRight = sumRight + arr[pointRight];
        }
    }
    // console.log(-1);
    return -1;
}
// balanceSum([1, 1]);
module.exports = balanceSum;
