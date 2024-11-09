const recMinSquare = (fSide: number, sSide: number): number => {
	const shortSide = Math.min(fSide, sSide)
	const longSide = Math.max(fSide, sSide)

	const mod = longSide % shortSide

	if (!mod) return shortSide

	return recMinSquare(mod, shortSide)
}

const recSum = (arr: number[]): number => {
	if (arr.length === 1) {
		return arr[0]
	}

	return arr[0] + recSum(arr.slice(1))
}

const recCount = (arr: number[]): number => {
	if (arr.length === 1) return 1

	return 1 + recCount(arr.slice(1))
}

const recBinSearch = (arr: number[], target: number, offset = 0): number => {
	const high = arr.length - 1
	const mid = Math.ceil(high / 2)
	const midItem = arr[mid]

	if (target === midItem) return mid + offset

	if (target > midItem) return recBinSearch(arr.slice(mid), target, offset + mid)
	else return recBinSearch(arr.slice(0, mid), target, offset)
}

const array = [2, 4, 6, 8]

console.log(recMinSquare(1680, 640))
console.log(recSum(array))
console.log(recCount(array))
console.log(recBinSearch(array, 6))
