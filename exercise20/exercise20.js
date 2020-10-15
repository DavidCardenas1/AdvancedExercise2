const container = document.getElementById('container').children[0];
document.getElementById('numTri').addEventListener('input', draw);
/**
 *
 */
function reset() {
  document.documentElement.style
      .setProperty('--size', `160px`);
  container.textContent = '';
  const row = document.createElement('div');
  row.className = 'row';

  const triangle = document.createElement('div');
  triangle.className='triangle';
  row.appendChild(triangle);
  container.appendChild(row);
}
/**
 *
 * @param {Number} total
 */
function drawTriangles(total) {
  count=1;
  while (count < total) {
    count++;
    const size = getComputedStyle(document.documentElement)
        .getPropertyValue('--size');
    document.documentElement.style
        .setProperty('--size', `${parseInt(size) / 2}px`);

    const block = document.createElement('div');
    const row1 = document.createElement('div');
    row1.className = 'row';
    const row2 = document.createElement('div');
    row2.className = 'row';
    row1.append(container.children[0].cloneNode(true));
    row2.append(container.children[0].cloneNode(true));
    row2.append(container.children[0].cloneNode(true));

    block.appendChild(row1);
    block.appendChild(row2);
    container.textContent = '';
    container.appendChild(block);
  }
}
/**
 *
 */
function draw() {
  const num = parseInt(document.getElementById('numTri').value);
  reset();
  drawTriangles(num);
}


