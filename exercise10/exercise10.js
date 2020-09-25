/**
 * Class Node
 */
class Node {
  /**
       *
       * @param {String} element
       */
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
/**
 * Class Linked List
 */
class LinkedList {
  /**
       * constructor
       */
  constructor() {
    this.head = null;
    // this.size = 0;
  }
  /**
     * add a New NODE
     * @param {String} element
     */
  add(element) {
    const newNode = new Node(element);
    let current;
    if (this.head == null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    // this.size++;
  }
  /**
     * @return {Boolean}
     */
  isPalindrome() {
    const stack=[];
    let current=this.head;
    while (current) {
      const top=stack[stack.length-1];
      const preTop=stack[stack.length-2];
      //   console.log(current.element,top);
      if ((top&&current.element===top)||(preTop&&current.element===preTop)) {
        if (preTop&&current.element===preTop) {
          stack.pop();
        }
        stack.pop();
        current=current.next;
        continue;
      }
      stack.push(current.element);
      current=current.next;
    }
    return stack.length===0?true:false;
  }
  /**
     * @return {Node}
     */
  getSize() {
    let curr = this.head;
    let size = 0;
    while (curr) {
      curr = curr.next;
      size++;
    }
    return size;
  }
  /**
     *
     * @param {Number} index
     * @return {Node} the node in that index
     */
  getInPosition(index) {
    let curr = this.head;
    let it = 0;
    while (it < index) {
      it++;
      curr = curr.next;
    }

    return curr;
  }
  /**
     * print list in per node
     */
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.element + ' ';
      console.log(str);
      curr = curr.next;
    }
    // console.log(str);
  }
}


const linkList = new LinkedList();
const word = 'ra';
for (let idx = 0; idx < word.length; idx++) {
  const element = word[idx];
  linkList.add(element);
}
console.log(linkList.isPalindrome());
// ///rracecarr
module.exports = LinkedList;
