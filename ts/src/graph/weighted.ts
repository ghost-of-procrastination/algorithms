export type WeightedGraph = Record<string, Record<string, number>>

export const A = 'a'
export const B = 'b'
export const C = 'c'
export const D = 'd'
export const Y = 'y'

export const plainGraph: WeightedGraph = {
	[A]: { [B]: 6, [C]: 2 },
	[B]: { [D]: 1, [A]: 6, [C]: 3 },
	[C]: { [B]: 3, [D]: 5, [A]: 2 },
	[D]: { [B]: 1, [C]: 5 },
}
