// const oldObj = {
//   name: 'Sara',
//   gender: 'Apache Attack Helicopter',
//   address: {
//     location: {
//       city: 'SF',
//       state: 'CA',
//     },
//     preferredLocation: {
//       city: 'SF',
//       state: [{cp: '123456'}, 'MN'],
//     },
//     other: undefined,
//   },
// };
/**
* @param {Object} oldObject
* @param {String} parentName
* @return {Object} The flatten obj
*/
function flatten(oldObject, parentName) {
  /* Your implementation goes here */
  const result = {};
  const deepSearch = (obj, string) => {
    Object.entries(obj).map(([property, value]) =>
      (typeof value == 'object' && !Array.isArray(value)) ?
        deepSearch(value, `${string}_${property}`) :
        result[`${string}_${property}`] = value,
    );
  };
  deepSearch(oldObject, parentName);
  // console.log(result);
  return result;
}

// flatten(oldObj, 'daveObj');
module.exports = flatten;
