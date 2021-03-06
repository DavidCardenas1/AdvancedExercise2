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
   * to add a existing Node
   * @param {Node} node type Node Class
   */
  addNode(node) {
    if (this.checkLoops()) {
      return null
    }
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
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
   * @return {Node} The node that init the bucle
   */
  checkLoops() {
    let fast = this.head;
    let slow = this.head;
    while (fast && slow && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        break
      }
    }
    if (slow != fast)
      return null;

    slow = this.head;
    while (slow != fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  /**
   *
   * @param {Number} index
   * @return {Node} the node in that index
   */
  getInPosition(index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let curr = this.head;
      let it = 0;
      while (it < index) {
        it++;
        curr = curr.next;
      }
      return curr;
    }
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
// linkList.add(0);
// linkList.add(1);
// linkList.add(2);
// linkList.add(3);
// // linkList.add(4);
// linkList.add(5);
// linkList.addNode(linkList.getInPosition(3))
// // // linkList.printList();
// console.log(linkList.checkLoops());
module.exports = LinkedList;
