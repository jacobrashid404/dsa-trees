import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];
  let nodeVals: number[] = [];
  nodeVals.push(node.val);

  for(const child of node.children) {
    const childVals = preOrder(child);
    nodeVals.push(...childVals);
  }

  return nodeVals;
}
// 1
//  \
//   2
// [1, 2]

/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];
  let nodeVals: number[] = [];

  for(const child of node.children) {
    const childVals = postOrder(child);
    nodeVals.push(...childVals);
  }
  nodeVals.push(node.val);

  return nodeVals;
}

export { preOrder, postOrder };
