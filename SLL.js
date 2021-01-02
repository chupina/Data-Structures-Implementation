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
Pop(){
  if(!this.tail) return undefined;  
  let current = this.head;
  let newTail = current;
  while(current.next){
      newTail = current;
      current = current.next;
  }
  
this.tail = newTail;
this.tail.next = null;
this.length--;
if (this.length ===0){
   this.head = null;
   this.tail = null;
}
return current; 
}

//removing from the beginning
shift(){
if(this.length===0) return undefined;
let currentHead = this.head;
this.head = currentHead.next;
this.length--;
return currentHead;
}
//adding to the beginning
unshift(val){
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
    length++;
    return this;
  
}

//get item from the given position
get(idx){
  if(pos<0 || pos>=this.length) return null;
  let counter =0;
  let current = this.head;
  while(counter!== idx){
   current = current.next;
   counter++;
  }
  return current;
}

// set a new value to an element at a given position
set(idx,val){
  let node = this.get(idx);
  if(node){
    node.value = val;
    return true;
  }
  return false;
}
}

//insert a new element at a given position
insert(idx,value){
  if()


}

