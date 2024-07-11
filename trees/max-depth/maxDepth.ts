import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node === null) return 0;

  let maxLength = 0;
  for (const child of node.children) {
    const currLength = maxDepth(child);
    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength + 1;
}

export { maxDepth };
