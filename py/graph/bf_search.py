from collections import deque
from typing import Dict, List, Optional
import undirected
import directed


def bf_search(graph: Dict[str, List[str]], start: str, target: str) -> List[str] or None:
    if start == target:
        return [start]

    queue = deque([start])
    parent = {start: None}

    while queue:
        current = queue.popleft()

        for neighbor in graph[current]:
            if neighbor not in parent:
                parent[neighbor] = current

                if neighbor == target:
                    path = []
                    while neighbor is not None:
                        path.append(neighbor)
                        neighbor = parent[neighbor]
                    return path[::-1]

                queue.append(neighbor)

    return None


print(bf_search(directed.countries_graph, directed.SW, directed.AU))
print(bf_search(undirected.cities_graph, undirected.DE, undirected.LA))


queue = deque(['qwe'])
queue.append('a')
queue.append('a')

print(queue)