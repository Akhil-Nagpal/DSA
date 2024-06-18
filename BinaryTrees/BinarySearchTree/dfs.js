// class Node {
//   constructor(key, left = null, right = null) {
//     this.key = key;
//     this.left = left;
//     this.right = right;
//   }
// }

// *-*-*-*-*-* Depth First Traversal Using itrative approach *-*-*-*-*-*
const depthFirstTraversal = (root) => {
  const values = [];
  // Check if the list empty
  if (root === null) {
    return values; // returning null or we can return empty array as per the need
  }

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.right);
    }
  }

  return values;
};

// *-*-*-*-*-* Depth First Traversal Using Recursive approach *-*-*-*-*-*

const recursiveDepthFirstTraversal = (root) => {
  // check if the tree is empty
  if (root === null) {
    return values; // returning null or empty array
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  // 2 ways to return the values
  // 1 -> Returning normally
  // return [root.key, leftValues, rightValues];
  // Output: [a, [b, c, d], [e, f, g]]

  // 2 -> Returning by spreading the values
  return [root.key, ...leftValues, ...rightValues];
};
