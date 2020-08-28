// const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];
/**
 *
 * @param {Array} input
 * @return {Object} The flatten obj
 */
function flattenArray(input) {
  const result = [];
  const deepSearch = (array) => {
    for (let idx = 0; idx < array.length; idx++) {
      const value=array[idx];
      if (Array.isArray(value)) {
        deepSearch(value);
      } else {
        result.push(value);
      }
    }
  };
  deepSearch(input);
  //   console.log(result);
  return result;
}
// flattenArray(input);
module.exports = flattenArray;
