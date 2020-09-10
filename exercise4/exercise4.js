/**
 *
 * @param {String} query
 * @return {Array}
 */
function querySelectorAll(query) {
  const result = [];
  const parentChilds = query.split('<');
  query = query.replace('<', '>');
  const findRootParent = function(elm, selector) {
    elm.querySelectorAll(selector).forEach((current) => {
      while (current && (elm !== current)) {
        current = current.parentNode;
      }
      if (current) {
        result.push(current);
      }
    });
    if (!selector) {
      result.push(elm);
    }
  };

  document.querySelectorAll(parentChilds[0]).forEach((element) => {
    findRootParent(element, parentChilds[1]);
  });
  // console.log(result);
  return result;
}


