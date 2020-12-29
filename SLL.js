// Implementation of Singly Linked List data structure
//defining a single node class
class Node{
    constructor(value){
        this.value = value,
        this.next = null;
    }
}

// defining SLL class

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail = null;
        this.length = 0;
    }

    // adding new nodes to the end of a list

    push(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
         this.tail.next = newNode;
         this.tail = newNode;   
        }

    }
}