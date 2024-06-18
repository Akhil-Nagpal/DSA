// *-*-*-*-*-* TREE SUM *-*-*-*-*-*

// *-*-*-*-*-* TREE SUM USING BREADTH FIRST TRAVERSAL *-*-*-*-*-*
const treeSumbsf = (root) => {
  // Check if the tree is empty
  if (root === null) {
    return 0;
  }

  const queue = [];
  const sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return sum;
};

// *-*-*-*-*-* TREE SUM USING DEPTH FIRST TRAVERSAL *-*-*-*-*-*

const treeSumdsf = (root) => {
  // Check if the tree is empty
  if (root === null) {
    return 0;
  }

  return root.key + treeSumdsf(root.left) + treeSumdsf(root.right);
};
