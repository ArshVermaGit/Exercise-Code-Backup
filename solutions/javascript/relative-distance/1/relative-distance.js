export function degreesOfSeparation(familyTree, personA, personB) {
  const graph = {};

  for (const parent in familyTree) {
    const children = familyTree[parent];

    if (!graph[parent]) graph[parent] = [];

    for (const child of children) {
      if (!graph[child]) graph[child] = [];

      // parent-child connection
      graph[parent].push(child);
      graph[child].push(parent);
    }

    // sibling connections
    for (let i = 0; i < children.length; i++) {
      for (let j = i + 1; j < children.length; j++) {
        graph[children[i]].push(children[j]);
        graph[children[j]].push(children[i]);
      }
    }
  }

  const queue = [[personA, 0]];
  const visited = new Set();

  while (queue.length) {
    const [person, dist] = queue.shift();

    if (person === personB) return dist;

    visited.add(person);

    for (const next of graph[person] || []) {
      if (!visited.has(next)) {
        queue.push([next, dist + 1]);
      }
    }
  }

  return -1;
}