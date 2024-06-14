# Linked List Data Structure In Javascript

Linked List are a type of data structure that store values in the form of a list. Within the list, each value is considered a `Node`, and each `Node` is connected with following values in the list (or null in case the element in the last in the list) through a pointer.

### There are 2 Types of Linked List:

&#10687; Singly Linked List

&#10687; Doubly Linked List

Both works very similar, but the difference is **Singly Linked List's** each node has a single pointer `(next)` that points to the _**Next Node**_ on the list.

While in **Doubly Linked List**, each node has two pointers `(previous & next)`, one pointing to the _**Next Node**_ and other pointing to the _**Previous Node**_.

## Creating Node For Linked List

### What is Node?

A `node` is fundamental element in linked List. It contains 2 main compnenets:

&#10687; Data &#8227; The value or information stored in the `node`.

&#10687; Links/References &#8227; Pointers or references to other `nodes`, which establish the structure's connectivity.

## Node In Singly Linked List

### In the context of `Singly Linked List` a node usually contains:

&#10687; Data &#8227; The actual value or information that the node holds.

&#10687; Next &#8227; A reference to the `next node` in the sequence.

### Node Implementation

```javascript
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
}
```

![Screenshot Singly Linked List](../assets/Singly%20Linked%20List.png)

## Node In Doubly Linked List

In a doubly linked list, each node contains references to both the next and the previous nodes. This allows traversal of the list in both directions (forward and backward).

&#10687; Data &#8227; The value or information stored in the node.

&#10687; Next &#8227; A reference to the next node in the sequence.

&#10687; Previous &#8227; A reference to the previous node in the sequence.

### Node Implementation

```javascript
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
```

![Screenshot Doubly Linked List](../assets/Doubly%20Linked%20List.png)

## Author

#### Akhil Nagpal
