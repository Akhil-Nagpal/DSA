class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// ----- Insertion -----

// Insert at the start
LinkedList.prototype.insertAtBegininng = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// Insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  //   this move head to end if the head is null
  if (!this.head) {
    this.head = newNode;
    return;
  }

  //   move to end
  let last = this.head;

  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

// Insert at the given node
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("The given prevNode cannot be null");
  }

  const newNode = new Node(data, prevNode.next);

  prevNode.next = newNode;
};

// ----- Deletion -----

// Delete at the Start or Delete Head
LinkedList.prototype.deleteHead = function () {
  if (!this.head) {
    console.log("The List is Empty!");
    return;
  }
  this.head = this.head.next;
};

// Delete at the End or Delete Tail
LinkedList.prototype.DeleteEnd = function () {
  // Case 1 -> If the head is null
  if (!this.head) {
    console.log("The List is Empty! Nothing to delete!");
    return;
  }

  // Case 2 -> if there is only one node
  if (!this.head.next) {
    this.head = null;
    return;
  }

  // Case 3 -> if there are more then one nodes
  let secondLast = this.head;

  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;
};

// Delete by given key/node
LinkedList.prototype.deleteByKey = function (key) {
  // Case 1 -> If the list is empty
  if (!this.head) {
    console.log("The list is Empty! Nothing be deleted");
    return;
  }

  // Case 2 -> If there is only one node
  if (!this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  // Case 3 -> If there are more than one nodes
  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("No node found with this key: ", key);
};

// ----- Searching -----
LinkedList.prototype.search = function (key) {
  let current = this.head;

  while (current) {
    if (current.data === key) {
      return true;
    }
  }
  return false;
};

// ----- Traversal/Printing -----
LinkedList.prototype.traverse = function () {
  let current = this.head;

  let listValues = [];

  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  if (listValues.length === 0) {
    console.log("The list is empty!");
  }
  console.log(listValues.join(" -> "));
};

// Reverse a Linked List
LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
};

let myList = new LinkedList();

myList.insertAtBegininng(10);
myList.insertAtEnd(5);
myList.insertAtEnd(19);
myList.insertAtEnd(25);

myList.traverse();

myList.insertAfter(myList.head.next.next.next, 2);

myList.traverse(); // Output: 10 -> 9 -> 51 -> 2 -> 4 -> 83 -> 45
