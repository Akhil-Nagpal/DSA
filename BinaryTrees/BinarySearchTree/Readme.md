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

## Deletion Method in Binary Search Tree

### Deletion using In-order Successor

```javascript
// *-*-*-*-*-* DELETION *-*-*-*-*-*

// Deletes a node with the given key from the BST
  delete(key) {
    this.root = this.deleteNode(this.root, key); // Update the root after deletion
  }

  // Helper function to delete a node with the given key
  deleteNode(root, key) {
    // Base Case -> If the root is null (key not found)
    if (root === null) {
      return null;
    }

    // Traverse the tree to find the node to delete
    if (key < root.key) {
      root.left = this.deleteNode(root.left, key); // Traverse the left subtree
    } else if (key > root.key) {
      root.right = this.deleteNode(root.right, key); // Traverse the right subtree
    } else {
      // Node with the key found
      // Case 1 -> Node is a leaf node (no children)
      if (root.left === null && root.right === null) {
        return null;
      }
      // Case 2 -> Node has only one child
      else if (root.left === null) {
        return root.right; // Replace node with its right child
      } else if (root.right === null) {
        return root.left; // Replace node with its left child
      }
      // Case 3 -> Node has two children
      else {
        // Find the minimum value node in the right subtree (In-order Successor)
        let tempNode = this.findMinNode(root.right);
        root.key = tempNode.key; // Replace the key with the successor's key
        root.right = this.deleteNode(root.right, tempNode.key); // Delete the successor
      }
    }
    return root;
  }

  // Finds the node with the minimum value in the subtree
  findMinNode(root) {
    // Traverse to the leftmost node
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }
```

### Deletion using In-order Predecessor

```javascript
  // Deletes a node with the given key from the tree.
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  // Recursively deletes a node with the given key from the subtree rooted at 'root'.
  deleteNode(root, key) {
    // Base case -> If the root is null, the key is not found.
    if (root === null) {
      return null;
    }

    // Traverse the left subtree if the key is less than the root's key.
    if (key < root.key) {
      root.left = this.deleteNode(root.left, key);
      // Traverse the right subtree if the key is greater than the root's key.
    } else if (key > root.key) {
      root.right = this.deleteNode(root.right, key);
    } else {
      // Node with the key to be deleted is found.
      // Case 1: Node has no children (leaf node).
      if (root.left === null && root.right === null) {
        return null;
        // Case 2: Node has only one child (right child).
      } else if (root.left === null) {
        return root.right;
        // Case 3: Node has only one child (left child).
      } else if (root.right === null) {
        return root.left;
        // Case 4: Node has two children.
      } else {
        // Find the maximum node in the left subtree. (In-order Precessor)
        let tempNode = this.findMaxNode(root.left);
        // Replace the root's key with the maximum key found.
        root.key = tempNode.key;
        // Delete the node with the maximum key in the left subtree.
        root.left = this.deleteNode(root.left, tempNode.key);
      }
      return root;
    }
  }

  // Finds the node with the maximum key in the subtree rooted at 'root'.
  findMaxNode(root) {
    // Traverse to the rightmost node.
    while (root.right !== null) {
      root = root.right;
    }
    return root;
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
