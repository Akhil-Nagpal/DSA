class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// *-*-*-*-*-* INSERTION *-*-*-*-*-*
// Insert At Beginning
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);

  //   Case 1 -> if the head is not null
  if (this.head !== null) {
    this.head.prev = newNode;
    return;
  }
  //   Case 2 -> if there is list or not, head will point to newNode
  this.head = newNode;

  //   Case 3 -> if the tail points to null
  if (this.tail === null) {
    this.tail = newNode;
    return;
  }
};

// Insert At End
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  //   Case 1 -> if the tail points to value and not to null
  if (this.tail !== null) {
    this.tail.next = newNode;
    return;
  }

  //   Case 2 -> Whether tail point to null or data
  this.tail = newNode;

  //   Case 3 -> if the head is pointing to null
  if (this.head === null) {
    this.head = newNode;
    return;
  }
};

// Insert after a given node
DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  // Check if the previous node is null
  if (prevNode === null) {
    console.log("Invalid Previous Node");
    return;
  }
  // Creating new Node with given data
  // newNode.next is poiting to prevNode.next
  // newNode.prev is pointing to prevNode
  const newNode = new Node(data, prevNode.next, prevNode);

  // If the previous node's next is not set to null then set next node's previous pointer to newNode
  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }

  // Link the previous node's next pointer to newNode
  prevNode.next = newNode;

  //   If the new Node's next pointing to null that means it is the last node
  if (newNode.next === null) {
    this.tail = null; // Update the tail of the list with new Node
  }
};

// *-*-*-*-*-* DELETION *-*-*-*-*-*

// Delete first Node
DoublyLinkedList.prototype.deleteFirst = function () {
  // Case 1 -> If the List is empty
  if (!this.head) {
    console.log("The List is Empty! Deletion can't be performed");
    return;
  }

  //   Case 2 -> if the list has only one node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    // if the list has more than one node or multiple nodes
    this.head = this.head.next;
    this.head.prev = null;
  }
};

// Delete Last Node
DoublyLinkedList.prototype.deleteLast = function () {
  // Case 1 -> if the list is empty
  if (!this.tail) {
    console.log("The List is Empty! Deletion can't be performed");
  }

  // Case 2 -> If there is only one Node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    // if there are more than one Node or multiple Nodes
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

// Reverse a Doubly Linked List
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current) {
    // swapping the varaibles
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    // move to next Node
    current = current.prev;
  }

  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
