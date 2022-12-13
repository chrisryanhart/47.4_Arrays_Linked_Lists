/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    // this.list = [];
    this.length = 0;

    for (let val of vals) this.push(val);

    console.log('test');
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // if the first node
    if(this.head === null) this.head = newNode;

    // if not the first node, set the last node to be the new node
    if(this.tail !== null) this.tail.next = newNode;

    // updates tail with the appended node
    // node is the tail even if there's only one node
    this.tail = newNode;

    // this.list.push(newNode);
    this.length += 1;

    console.log('push test');

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if(this.head !== null){
      this.head = newNode;
      this.head.next = oldHead;
      this.length += 1;
    }else{
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let newTail = null;
    let oldTail = null;

    if(this.length === 0) throw new Error;

    if(this. length ==1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentNode.val;
    }


    while(currentNode){

      if(currentNode.next === this.tail){
        newTail = currentNode;
        oldTail = currentNode.next;
        this.tail = newTail;
        this.length -= 1;
        return oldTail.val;
      } 
      currentNode = currentNode.next;
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    let oldHeadVal = this.head.val;

    if(this.length === 0) throw new Error;

    if(this. length ==1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHeadVal;
    }

    this.head = this.head.next;
    this.length -= 1;

    return oldHeadVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // use while loop until the idx is acheived 
    let i = 0;
    let currentNode = this.head;
    let idxVal;

    while(i<=idx){
      if(i === idx){
        idxVal = currentNode.val;
        return idxVal;
      }
      i++
      currentNode = currentNode.next;
    }

    throw new Error;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // use while loop until the idx is acheived 
    let i = 0;
    let currentNode = this.head;

    while(i<=idx){
      if(i === idx){
        currentNode.val = val;
        return;
      }
      i++
      currentNode = currentNode.next;
    }

    throw new Error;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // use while loop until the idx is acheived 
    let i = 0;
    let currentNode = this.head;

    if (this.length === 0){
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length ++;
      return;
    }

    while(i <= idx - 1){
      if(i === idx - 1){
        
        // update the tail if it's the last node
        if(currentNode === this.tail){
          let newNode = new Node(val);
          this.tail = newNode;
          newNode.next = currentNode.next;
          currentNode.next = newNode;

        }else {
          let newNode = new Node(val);
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        }


        this.length ++;

        return;
      }
      i++;
      currentNode = currentNode.next;
    }

    throw new Error;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // use while loop until the idx is acheived 
    let i = 0;
    let currentNode = this.head;

    if(this.length === 1 && idx === 0){
      this.length = 0;
      this.head = null;
      this.tail = null;
      return;
    }

    while(i<=idx){
      if(i === idx - 1){
        let removedVal = currentNode.next.val;
        currentNode.next = currentNode.next.next;
        this.length --;
        return removedVal;
      }
      i++
      currentNode = currentNode.next;
    }

    throw new Error;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let count = 0;


    if(this.head === null) return 0;

    let i = 0;
    let currentNode = this.head;

    while(currentNode){
      sum += currentNode.val;
      count ++;

      currentNode = currentNode.next;
    }
    
    let average = sum/count;
    return average;
  }
}

module.exports = LinkedList;
