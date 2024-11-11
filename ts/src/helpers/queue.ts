export class Queue<T = any> {
	constructor(private _queue: T[] = []) {}

	get list(): T[] {
		return this._queue
	}

	append(value: T): this
	append(value: T[]): this

	append(value: T | T[]): this {
		if (Array.isArray(value)) this._queue.push(...value)
		else this._queue.push(value)

		return this
	}

	pop(): T {
		if (this._queue.length === 0) throw new Error('Cannot pop empy queue')
		const item = this._queue[0]
		this._queue = this._queue.slice(1)

		return item
	}
}
