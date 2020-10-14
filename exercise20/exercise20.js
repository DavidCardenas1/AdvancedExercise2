
const container = document.getElementById('container');
const t1 = document.getElementById('t1');
document.getElementById('numTri').addEventListener('input', draw);
/**
 *
 */
function draw() {
  const num = parseInt(document.getElementById('numTri').value);
  t1.textContent = '';
  if (num > 1) {
    t1.appendChild(deep(t1, 1, num));
  }
  document.body.append(container);
}
/**
 *
 * @param {HTMLElement} currentNode
 * @param {Number} count
 * @param {Number} num
 * @return {HTMLElement}
 */
function deep(currentNode, count, num) {
  if (num===1||num>7) {
    return;
  }
  if (currentNode.children.length === 0) {
    const {width} = getComputedStyle(currentNode);
    currentNode.appendChild(wrapper(width));
    count++;
    currentNode = currentNode.lastChild;
  }
  if (count < num) {
    for (const iterator of currentNode.children) {
      deep(iterator, count, num);
    }
  }
  return currentNode;
}
/**
 *
 * @param {string} heightpx
 * @return {HTMLElement}
 */
function wrapper(heightpx) {
  const wraper = document.createElement('div');
  wraper.style['height'] = heightpx;
  wraper.className = 'wraper';

  const tri = document.createElement('div');
  tri.style.width = `${parseInt(heightpx) / 2}px`;
  tri.className = 'triangles';


  for (let idx = 0; idx < 3; idx++) {
    const newClone = tri.cloneNode(true);
    wraper.appendChild(newClone);
  }

  return wraper;
}


