import { arrayNotEmpty } from './helpers/arrayNotEmpty'

enum TargetValue {
	min = 'min',
	max = 'max',
}
type TargetValueUnion = keyof typeof TargetValue

enum SortOrder {
	desc = 'desc',
	asc = 'asc',
}
type SortOrderUnion = keyof typeof SortOrder

const getMinMax = (arr: number[], target: TargetValueUnion = TargetValue.max) => {
	if (!arrayNotEmpty(arr)) throw new Error('Invalid data provided')

	let value = arr[0]
	let index = 0

	for (let i = 1; i < arr.length; i++) {
		if ((target === 'max' && arr[i] > value) || (target === 'min' && arr[i] < value)) {
			value = arr[i]
			index = i
		}
	}

	return { value, index }
}

const selectionSort = (arr: number[], order: SortOrderUnion = SortOrder.desc) => {
	const sorted: number[] = []
	const arrCopy = [...arr]

	const targetValue = order === SortOrder.desc ? TargetValue.max : TargetValue.min

	while (arrayNotEmpty(arrCopy)) {
		const { index } = getMinMax(arrCopy, targetValue)

		sorted.push(arrCopy.splice(index, 1)[0])
	}

	return sorted
}

const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101))
console.log(selectionSort(array, 'asc'))
