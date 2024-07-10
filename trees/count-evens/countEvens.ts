import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  let evens = 0;
  const nodes: TreeNodeNum[] = [node];

  while (nodes.length !== 0) {
    const current = nodes.pop()!;

    if (current.val % 2 === 0) {
      evens++;
    }

    for (const child of current.children) {
      nodes.push(child);
    }
  }

  return evens;
}

export { countEvens };
