const quickSort = (arr: number[]): number[] => {
	if (arr.length < 2) return arr

	const pivotIndex = Math.floor(Math.random() * arr.length)
	const pivot = arr[pivotIndex]

	let under = []
	let above = []

	for (let [index, item] of arr.entries()) {
		if (index === pivotIndex) continue

		if (item <= pivot) under.push(item)
		else above.push(item)
	}

	return [...quickSort(under), pivot, ...quickSort(above)]
}

const array = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 100))
console.log(quickSort(array))
