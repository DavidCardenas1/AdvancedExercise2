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
    const stack = [];
    let slow = this.head;
    let fast= this.head;
    let startAfterMiddle;
    if (!slow.next) {
        return true
    }
    stack.push(this.head.element);
    while (true) {
      fast=fast.next.next;
      if (fast===null) {
        startAfterMiddle=slow.next;
        break;
      }
      if (fast.next===null) {
        startAfterMiddle=slow.next.next;
        break;
      }
      slow=slow.next;
      stack.push(slow.element);
    }
    while (startAfterMiddle) {
      const top= stack.pop();
      if (startAfterMiddle.element!==top) {
        return false;
      }
      startAfterMiddle=startAfterMiddle.next;
    }
    return true
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


// const linkList = new LinkedList();
// const word = 'rrriirrr';
// for (let idx = 0; idx < word.length; idx++) {
//   const element = word[idx];
//   linkList.add(element);
// }

// // // linkList.add(1);
// // // linkList.add(1);
// // // linkList.add(1);
// console.log(linkList.isPalindrome());
// ///rracecarr
module.exports = LinkedList;
