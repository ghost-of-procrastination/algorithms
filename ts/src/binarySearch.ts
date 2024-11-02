const binarySearch = (list: number[], target: number) => {
	let low = 0
	let high = list.length - 1

	while (low <= high) {
		const mid = Math.ceil((high + low) / 2)
		const guess = list[mid]

		if (guess === target) return mid

		if (guess > target) high = mid - 1
		else low = mid + 1
	}
}

const array = Array.from({ length: 128 }, (_, i) => ++i)

console.log(binarySearch(array, 50))
