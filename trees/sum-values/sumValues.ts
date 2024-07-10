import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  let sum = 0;
  const nodes: TreeNodeNum[] = [node];

  while (nodes.length !== 0) {
    const current = nodes.pop()!;

    sum += current.val;

    for (const child of current.children) {
      nodes.push(child);
    }
  }

  return sum;
}

export { sumValues };
