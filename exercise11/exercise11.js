/**
 *
 * @param {Object} obj
 * @param {String} path
 * @param {Number} value
 * @return {Object}
 */
function set(obj, path, value) {
  const paths = path.split('.');
  let currentObj = obj;
  for (let idx = 0; idx < paths.length; idx++) {
    const element = paths[idx];
    if (idx === paths.length - 1) {
      if (currentObj[element]) {
        const auxObj=currentObj[element];
        for (const key in auxObj) {
          if (auxObj.hasOwnProperty(key)) {
            currentObj = currentObj[element];
            break;
          }
        }
      }
      if (!currentObj[element]||currentObj[element]) {
        currentObj[element] = value;
        break;
      }
    }
    if (currentObj[element]) {
      if (typeof currentObj[element] !== 'object' &&
                typeof currentObj[element] !== 'function') {
        throw new Error('Not object');
      }
    }
    if (!currentObj[element]) {
      currentObj[element] = {};
    }
    currentObj = currentObj[element];
  }
  return obj;
  // console.log(obj.a.path.to.deeply.nested.property);
}
// let obj = {
//     // a: []
// }
// set(obj, 'path', 42);
module.exports = set;