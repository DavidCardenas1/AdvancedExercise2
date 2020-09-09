/**
 *
 * @param {String} query
 * @return {Array}
 */
function querySelectorAll(query) {
  const result = [];
  let nodeParent; let classIdName = null; let classOrId=false;
  const parentChilds = query.split('<');
  let parent = parentChilds[0].trim().split(' ');
  parent = parent[0];
  for (let idx = 0; idx < parent.length; idx++) {
    const char = parent[idx];
    if (char === '.' || char === '#') {
      classOrId=true;
      nodeParent = parent.slice(0, idx);
      classIdName = parent.slice(idx + 1, parent.length);
      break;
    }
  }
  if (!classOrId) {
    nodeParent=parent;
  }
  query = query.replace('<', '>');
  // console.log(query,nodeParent);
  const getParent = function(child) {
    if (nodeParent.toUpperCase() === child.parentNode.tagName) {
      if (classIdName) {
        if (child.parentNode.id === classIdName ||
            child.parentNode.className === classIdName) {
          return child.parentNode;
        }
      } else {
        return child.parentNode;
      }
    } else {
      if (!nodeParent) {
        if (child.parentNode.id === classIdName ||
            child.parentNode.className === classIdName) {
          return child.parentNode;
        }
      }
    }
    return getParent(child.parentNode);
  };

  const preResult = document.querySelectorAll(query);
  // console.log(preResult );
  preResult.forEach((element) => {
    result.push(getParent(element).outerHTML);
  });
  // console.log(result);
  return result;
}
