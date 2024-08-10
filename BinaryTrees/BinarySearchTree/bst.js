class bstNode {
  constructor(key, left = null, right = null) {
    this.key = key; // Key value of the node
    this.left = left; // Left child of the node
    this.right = right; // Right child of the node
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Root of the binary search tree
  }

  // *-*-*-*-*-* INSERTION *-*-*-*-*-*
  // Inserts a new key into the BST
  insert(key) {
    const newNode = new bstNode(key); // Create a new node with the given key
    // Case 1 -> If the tree is empty, set the new node as the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Insert the new node into the correct position
      this.insertRoot(this.root, newNode);
    }
  }

  // *-*-*-*-*-* INSERTION USING RECURSION *-*-*-*-*-*
  // Recursively inserts a new node into the BST
  insertRoot(root, newNode) {
    // Case 2 -> If the new key is smaller than the root's key, insert into the left subtree
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertRoot(root.left, newNode);
      }
    } else {
      // Case 3 -> If the new key is greater than or equal to the root's key, insert into the right subtree
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertRoot(root.right, newNode);
      }
    }
  }

  // *-*-*-*-* INSERTION USING LOOP *-*-*-*-*
  // Inserts a new key into the BST using a while loop
  insert(key) {
    const newNode = new bstNode(key); // Create a new node with the given key
    // Base Case -> If the tree doesn't exist, set the new node as the root
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root; // Start at the root

    // ----- Insertion using while loop -----
    while (current) {
      // Case 0 -> Traverse the tree to find the correct position
      if (newNode.key < current.key) {
        if (current.left === null) {
          current.left = newNode; // Insert the new node as the left child
          return;
        }
        current = current.left; // Move to the left child
      } else {
        if (current.right === null) {
          current.right = newNode; // Insert the new node as the right child
          return;
        }
        current = current.right; // Move to the right child
      }
    }
  }

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

  // *-*-*-*-*-* TRAVERSAL OF BINARY TREES *-*-*-*-*-*

  // ----- IN-ORDER TRAVERSAL -----
  // Prints the keys of the BST in ascending order
  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    console.log(result); // Output the result array
  }

  // Helper function for in-order traversal
  inOrder(root, result) {
    if (root !== null) {
      this.inOrder(root.left, result); // Visit left subtree
      result.push(root.key); // Visit root
      this.inOrder(root.right, result); // Visit right subtree
    }
  }

  // ----- PRE-ORDER TRAVERSAL -----
  // Prints the keys of the BST in pre-order
  preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    console.log(result); // Output the result array
  }

  // Helper function for pre-order traversal
  preOrder(root, result) {
    if (root !== null) {
      result.push(root.key); // Visit root
      this.preOrder(root.left, result); // Visit left subtree
      this.preOrder(root.right, result); // Visit right subtree
    }
  }

  // ----- POST-ORDER TRAVERSAL -----
  // Prints the keys of the BST in post-order
  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    console.log(result); // Output the result array
  }

  // Helper function for post-order traversal
  postOrder(root, result) {
    if (root !== null) {
      this.postOrder(root.left, result); // Visit left subtree
      this.postOrder(root.right, result); // Visit right subtree
      result.push(root.key); // Visit root
    }
  }
}

// Example usage
let bst = new BinarySearchTree();

bst.insert(25);
bst.insert(18);
bst.insert(13);
bst.insert(21);
bst.insert(27);
bst.insert(29);

// Uncomment the following lines to see the traversal outputs
// bst.inOrderTraversal(); // Should print the BST keys in ascending order
// bst.preOrderTraversal(); // Should print the BST keys in pre-order
// bst.postOrderTraversal(); // Should print the BST keys in post-order
