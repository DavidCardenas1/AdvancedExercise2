// const binMatrix = [
//     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
// ]
// bin = [
//     [1, 1, 0, 1, 1, 1],
//     [1, 1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 0],
//     [0, 1, 0, 1, 1, 0],
//     [0, 1, 1, 1, 0, 0],
// ]
/**
 *
 * @param {Array} histogram
 * @return {Number}
 */
function getArea(histogram) {
  const stack = []; // [index heigh]
  let maxArea = 0;
  for (let idxHisto = 0; idxHisto < histogram.length; idxHisto++) {
    const curHeight = histogram[idxHisto];
    let start = idxHisto;
    while (stack.length > 0 && stack[stack.length - 1][1] > curHeight) {
      const [index, h] = stack.pop();
      maxArea = Math.max(maxArea, h * (idxHisto - index));
      start = index;
    }
    if (curHeight != 0) {
      stack.push([start, curHeight]);
    }
  }
  for (let idxStack = 0; idxStack < stack.length; idxStack++) {
    const [index, heigh] = stack[idxStack];
    maxArea = Math.max(maxArea, heigh * (histogram.length - index));
  }
  return maxArea;
}
/**
 *
 * @param {Array} arr
 * @return {Number}
 */
function largestArea(arr) {
  let histogram = [];
  let maxArea = -1;
  let newArea;
  for (let row = 0; row < arr.length; row++) {
    if (row === 0) {
      histogram = arr[row];
      newArea = getArea(histogram, row);
      if (newArea > maxArea) {
        maxArea = newArea;
      }
      continue;
    }
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        histogram[col] = 0;
      } else {
        histogram[col] += 1;
      }
    }
    newArea = getArea(histogram, row);
    if (newArea > maxArea) {
      maxArea = newArea;
    }
  }
  return maxArea;
}
// largestArea(binMatrix)
module.exports = largestArea;
