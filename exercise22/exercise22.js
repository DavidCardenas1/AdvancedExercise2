const process = require('process');
/**
 *
 */
class LoadingBar {
  /**
     *
     * @param {Number} size
     */
  constructor(size) {
    this.size = size;
    this.cursor = 0;
    this.bar_length = this.size / 5;
    this.tail = 0;
  }
  /**
   *
   */
  reset() {
    this.cursor = 0;
    this.tail = 0;
  }
  /**
   *
   * @param {String} bar
   */
  printCurrentBar(bar) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(bar);
  }
  /**
   *
   * @param {Number} cursor
   * @return {String}
   */
  draw(cursor) {
    if (cursor >= this.bar_length) {
      this.tail++;
    }
    let fillCursor = cursor - this.tail;
    if (cursor >= this.size) {
      fillCursor = this.size - this.tail;
    }
    const emptyFront = this.getBar((this.size - cursor), '\u2591');
    const emptyBack = this.getBar(this.tail, '\u2591');
    const bar = this.getBar(fillCursor, '\u2588');

    if (this.tail >= this.size) {
      this.reset();
    }
    return `${emptyBack}${bar}${emptyFront}`;
  }
  /**
   *
   */
  start() {
    this.timer = setInterval(async () => {
      const cursor = this.cursor++;
      const bar = this.draw(cursor);
      this.printCurrentBar(bar);
    }, 100);
  }
  /**
 *
 * @param {Number} length
 * @param {string} char
 * @return {String}
 */
  getBar(length, char) {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += char;
    }
    return str;
  }
}
// const ld = new LoadingBar(50);
// ld.start();
module.exports = LoadingBar;
