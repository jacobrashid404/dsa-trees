import { TreeNode, TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  let count = 0;

  const nodes: TreeNodeNum[] = [node];

  while (nodes.length !== 0) {
    const currentNode = nodes.pop()!;

    if (currentNode.val > lowerBound) count++;

    for (const child of currentNode.children) {
      nodes.push(child);
    }
  }

  return count;
}

export { numGreater };