/**
 *
 * @param {String} query
 * @return {Array}
 */
function querySelectorAll(query) {
  const result = [];
  const parentChilds = query.split('<');
  const findRootParent = function (elm, selector) {
    if (!selector) {
      result.push(elm);
      return
    }
    let current = elm.querySelector(selector)
    if (current) {
      result.push(elm);
    }    
  };

  document.querySelectorAll(parentChilds[0]).forEach((element) => {
    findRootParent(element, parentChilds[1]);
  });
  // console.log(result);  
  return result;
}


