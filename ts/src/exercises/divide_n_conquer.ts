const getMinSquare = (fSide: number, sSide: number): number => {
	const shortSide = Math.min(fSide, sSide)
	const longSide = Math.max(fSide, sSide)

	const mod = longSide % shortSide

	if (!mod) return shortSide

	return getMinSquare(mod, shortSide)
}

console.log(getMinSquare(1680, 640))

const array = [2, 4, 6, 8]

const recursiveSum = (arr: number[]): number => {
	if (arr.length === 1) {
		return arr[0]
	}

	return arr[0] + recursiveSum(arr.slice(1))
}

console.log(recursiveSum(array))

const recursiveCount = (arr: number[]): number => {
	if (arr.length === 1) return 1

	return 1 + recursiveCount(arr.slice(1))
}

console.log(recursiveCount(array))
