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
      if (typeof currentObj[element] !== 'object'&&
                typeof currentObj[element] !== 'function'
                ) {
        throw new Error('Not object');
      }
      if (currentObj[element] instanceof Number) {
        currentObj[element] = {};
      }
    }
    if (!currentObj[element]) {
        if (typeof currentObj[element]==='boolean') {
            throw new Error('Not object');
        }        
      currentObj[element] = {};
    }
    currentObj = currentObj[element];
  }
  return obj;
}

// const obj = {a: {x: false}};
// set(obj, 'a.x.c.d', 42);
// const obj={a:  function value(){}}
// const obj = {
//     path: 'err',
//   };
// set(obj, 'path.err', 123);
// // console.log(obj.a.x.y);
// console.log(JSON.stringify(obj));
//  { a: {myarr: [{value: 123}]}}

module.exports = set;