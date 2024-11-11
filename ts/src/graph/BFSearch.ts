import * as undirected from './undirected'
import * as directed from './directed'
import { Queue } from '../helpers/queue'
import { arrayNotEmpty } from '../helpers/arrayNotEmpty'

type Graph = Record<string, string[]>

export const BFSearch = (graph: Graph, start: string, target: string): string[] | null => {
	if (start === target) return [start]

	const queue = new Queue([start])
	const parents: Record<string, string | null> = { [start]: null }

	while (arrayNotEmpty(queue.list)) {
		const current = queue.pop()
		const neighbors = graph[current]

		for (let neighbor of neighbors) {
			if (!(neighbor in parents)) {
				parents[neighbor] = current

				if (neighbor === target) {
					let parent: string | null = neighbor
					const path = []

					while (parent) {
						path.push(parent)
						parent = parents[parent]
					}

					return path.reverse()
				} else {
					queue.append(neighbor)
				}
			}
		}
	}

	return null
}

console.log(BFSearch(undirected.citiesGraph, undirected.SE, undirected.BT))
console.log(BFSearch(directed.perksGraph, directed.ENTRY, directed.FAT))
