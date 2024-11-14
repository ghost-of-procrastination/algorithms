from typing import List, Dict
from math import inf
from weighted import plain_graph, A, D, B, C, Y, WeightedGraph
from heapq import heappop, heappush


def find_lowest_cost(nodes: Dict[str, int or None]) -> Dict[str, int] or None:
    lowest = inf
    node = None

    for name, cost in nodes.items():
        if cost < lowest:
            lowest = cost
            node = name

    return node


def dijkstra(graph: WeightedGraph, start: str, end: str) -> (List[str], int) or None:
    parents = {start: None}
    costs = {node: inf for node in graph}
    costs[start] = 0

    priority_queue = [(0, start)]
    visited = set()

    while priority_queue:
        cost, node = heappop(priority_queue)
        neighbors = graph[node]

        if node == end:
            path = []
            parent = node

            while parent:
                path.append(parent)
                parent = parents[parent]

            return path[::-1], cost

        if node in visited:
            continue
        visited.add(node)

        for neighbor, weight in neighbors.items():
            new_cost = cost + weight
            if new_cost < costs[neighbor]:
                costs[neighbor] = new_cost
                parents[neighbor] = node
                heappush(priority_queue, (new_cost, neighbor))

    return None


print(dijkstra(plain_graph, A, B))
