// const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];
/**
 *
 * @param {Array} input
 * @return {Object} The flatten obj
 */
function flattenArray(input) {
  const result = [];
  const deepSearch = (array) => {
    array.map((value) => {
            (Array.isArray(value)) ?
                deepSearch(value) :
                result.push(value);
    });
  };
  deepSearch(input);
  return result;
}
// flattenArray(input);
module.exports = flattenArray;
/**
* expected output:
* [1,2,3,4,5,6,7,8,9,10]
*/
