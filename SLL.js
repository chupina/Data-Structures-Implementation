// Implementation of Singly Linked List data structure
//defining a single node class
class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

// defining SLL class

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding new nodes to the end of a list

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removing from the end of a list
  Pop() {
    if (!this.tail) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //removing from the beginning
  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  //adding to the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //get item from the given position
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set a new value to an element at a given position
  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  //insert a new element at a given position
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let prevEl = this.get(idx - 1);

    newNode.next = prevEl.next;
    debugger;
    prevEl.next = newNode;

    this.length++;
    debugger;
    return this;
  }

  //remove element from the certain position
  remove(idx) {
    if (idx >= this.length || idx < 0) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let removedEl = this.get(idx);
    let prevEl = this.get(idx - 1);
    prevEl.next = removedEl.next;
    this.length--;
    return removedEl;
  }

  //reverse in place
  reverse() {
    if (!this.head) return false;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = null;
    let previous = null;

    // this.tail.next = previous;
    debugger;
    for (let i = 0; i < this.length; i++) {
      debugger;
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
}
