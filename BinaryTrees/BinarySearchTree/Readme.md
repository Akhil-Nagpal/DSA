# Implementation of Binary Search Tree

&#10687; First &#8227; We must make a Binary Search Tree Node. This Node is the same as the Doubly Linked List Node but the pointera acts as in tree format.

### Node &#8227;

![ScreenShot Node](../../assets/Node.png)

### Code &#8227;

```javascript
class bstNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

// OR

class bstNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
```

### Creating BST Root &#8227;

![Screenshot Root](../../assets/root.png)

### Code &#8227;

```javascript
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
```

## Insertion Method in Binary Search Tree

### Insertion using recursion

```javascript
// *-*-*-*-*-* INSERTION *-*-*-*-*-*
  insert(key) {
    const newNode = new bstNode(key);
    // Case 1 -> if there is no tree exists
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertRoot(this.root, newNode);
    }
  }
  // *-*-*-*-*-* INSERTION USING RECURSION*-*-*-*-*-*
  insertRoot(root, newNode) {
    // Case 2 -> if the tree exists then check if the value is smaller than root
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertRoot(root.left, newNode);
      }
    } else {
      // Case 3 -> if the value is greater than root
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertRoot(root.right, newNode);
      }
    }
  }
```

### Insertion using While Loop

```javascript
//  *-*-*-*-*-* INSERTION USING WHILE LOOP *-*-*-*-*-*

  insert(key) {
    const newNode = new bstNode(key);

    // Case 1 -> if the tree doesn't exists
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      // Case 2 -> if the value is smaller than root
      if (newNode.key < current.key) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
        // Case 3 -> if the value is greater than root
      } else if (newNode.key > current.key) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
```

## Traversal of Binary Search Tree

### In-order Traversal

#### Code &#8227;

```javascript
inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    console.log(result);
  }

  // Helper Function
  inOrder(root, result) {
    if (root !== null) {
      this.inOrder(root.left, result);
      result.push(root.key);
      this.inOrder(root.right, result);
    }
  }
```

#### Visualization &#8227;

![Screenshot In-order Traversal](../../assets/In-order%20traversal.png)

### Pre-order Traversal

#### Code &#8227;

```javascript
 preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    console.log(result);
  }

  // Helper Function
  preOrder(root, result) {
    if (root !== null) {
      result.push(root.key);
      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }
  }
```

#### Visualization &#8227;

![Screenshot Pre-order Traversal](../../assets/pre-order%20traversal.png)

### Post-order Traversal

#### Code &#8227;

```javascript
postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    console.log(result);
  }

  // Helper Functions
  postOrder(root, result) {
    if (root !== null) {
      this.postOrder(root.left, result);
      this.postOrder(root.right, result);
      result.push(root.key);
    }
  }
```

#### Visualization &#8227;

![Screenshot Post-order Traversal](../../assets/Post-order%20Traversal.png)
