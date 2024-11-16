export class PHeap {
	heap: [number, any][] = [] // Array of [priority, value]

	push(item: [number, any]) {
		this.heap.push(item) // Add the item to the end
		this.bubbleUp() // Restore the heap property
	}

	pop(): [number, any] | undefined {
		if (this.heap.length === 0) return undefined

		const root = this.heap[0] // The smallest element
		const last = this.heap.pop()

		if (this.heap.length > 0 && last) {
			this.heap[0] = last // Move the last element to the root
			this.bubbleDown() // Restore the heap property
		}

		return root
	}

	private bubbleUp() {
		let index = this.heap.length - 1

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			if (this.heap[index][0] >= this.heap[parentIndex][0]) break
			;[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
			index = parentIndex
		}
	}

	private bubbleDown() {
		let index = 0
		const length = this.heap.length

		while (true) {
			const leftChildIndex = 2 * index + 1
			const rightChildIndex = 2 * index + 2
			let smallest = index

			if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
				smallest = leftChildIndex
			}

			if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
				smallest = rightChildIndex
			}

			if (smallest === index) break
			;[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
			index = smallest
		}
	}
}
