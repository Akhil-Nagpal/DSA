class bstNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

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

  // *-*-*-*-*-* INSERTION USING WHILE LOOP *-*-*-*-*-*

  // insert(key) {
  //   const newNode = new bstNode(key);

  //   // Case 1 -> if the tree doesn't exists
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return;
  //   }

  //   let current = this.root;

  //   while (current) {
  //     // Case 2 -> if the value is smaller than root
  //     if (newNode.key < current.key) {
  //       if (current.left === null) {
  //         current.left = newNode;
  //         return;
  //       }
  //       current = current.left;
  //       // Case 3 -> if the value is greater than root
  //     } else if (newNode.key > current.key) {
  //       if (current.right === null) {
  //         current.right = newNode;
  //         return;
  //       }
  //       current = current.right;
  //     }
  //   }
  // }

  // *-*-*-*-*-* IN-ORDER TRAVERSAL *-*-*-*-*-*
  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    console.log(result);
  }

  inOrder(root, result) {
    if (root !== null) {
      this.inOrder(root.left, result);
      result.push(root.key);
      this.inOrder(root.right, result);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(25);
bst.insert(18);
bst.insert(13);
bst.insert(21);
bst.insert(27);
bst.insert(29);

bst.inOrderTraversal();
