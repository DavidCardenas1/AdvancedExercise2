/**
* @param {Object} oldObject
* @param {String} parentName
* @return {Object} The flatten obj
*/
function flatten(oldObject, parentName) {
  /* Your implementation goes here */
  const result = {};
  const deepSearch = (obj, string) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        const {[property]: value} = obj;
        if (typeof value === 'object' && !Array.isArray(value)) {
          deepSearch(value, `${string}_${property}`);
        } else {
          result[`${string}_${property}`] = value;
        }
      }
    }
  };
  deepSearch(oldObject, parentName);
  // console.log(result);
  return result;
}

// flatten(oldObj, 'daveObj');
module.exports = flatten;
