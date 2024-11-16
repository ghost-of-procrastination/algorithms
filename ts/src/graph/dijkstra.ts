import { PHeap } from '../helpers/PHeap'
import { A, D, WeightedGraph, plainGraph } from './weighted'

const dijkstra = (graph: WeightedGraph, start: string, end: string): { path: string[]; cost: number } | null => {
	const costs = Object.fromEntries(Object.keys(graph).map((node) => [node, Infinity]))
	costs[start] = 0
	const parents: Record<string, string | null> = { [start]: null }
	const visited = new Set()

	const heap = new PHeap()
	heap.push([0, start])

	while (heap.heap.length > 0) {
		const [cost, current] = heap.pop() as [number, string]
		const neighbors = graph[current]

		if (current === end) {
			let parent = current
			const path = []

			while (parent) {
				path.push(parent)
				parent = parents[parent] as string
			}

			return { path: path.reverse(), cost }
		}

		if (visited.has(current)) continue
		visited.add(current)

		for (let [neighbor, weight] of Object.entries(neighbors)) {
			const newCost = weight + cost

			if (costs[neighbor] > newCost) {
				costs[neighbor] = newCost
				parents[neighbor] = current
				heap.push([newCost, neighbor])
			}
		}
	}

	return null
}

console.log(dijkstra(plainGraph, A, D))
