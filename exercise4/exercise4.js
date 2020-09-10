/**
 *
 * @param {String} query
 * @return {Array}
 */
function querySelectorAll(query) {
  const result = [];
  const parentChilds = query.split('<');
  query = query.replace('<', '>');
  const inCollection = function(all, current) {
    for (let i = 0; i < all.length; i++) {
      if (all[i] == current) {
        return true;
      }
    }
    return false;
  };
  const findRootParent = function(elm, selector) {
    const all = document.querySelectorAll(selector);
    let curent = elm;
    while (curent && !inCollection(all, curent)) {
      curent = curent.parentNode;
    }
    return curent;
  };
  document.querySelectorAll(query).forEach((element) => {
    result.push(findRootParent(element, parentChilds[0]).outerHTML);
  });

//   console.log(result);
  return result;
}


