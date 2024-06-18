// class Node {
//   constructor(key, left = null, right = null) {
//     this.key = key;
//     this.left = left;
//     this.right = right;
//   }
// }

const breadthFirstTraversal = (root) => {
  const values = [];
  //   chcek if the tree is empty
  if (root === null) {
    return values; // returning null or empty array
  }

  const queue = [root];

  while (queue.lenght > 0) {
    const node = queue.shift();
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};
