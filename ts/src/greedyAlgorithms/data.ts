export type Covering = Record<string, string[]>

const MT = 'mt'
const WA = 'wa'
const OR = 'or'
const ID = 'id'
const NV = 'nv'
const UT = 'ut'
const CA = 'ca'
const AZ = 'az'

export const states = [MT, WA, OR, ID, NV, UT, CA, AZ]

export const stations: Covering = {
	kone: [ID, NV, UT],
	ktwo: [WA, ID, MT],
	kthree: [OR, NV, CA],
	kfour: [NV, UT],
	kfive: [CA, AZ],
}
