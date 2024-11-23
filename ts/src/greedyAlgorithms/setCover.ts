import { states, stations, Covering } from './data'

const setIntersection = (setF: Set<any>, setS: Set<any>) => {
	if (setF.size > setS.size) [setF, setS] = [setS, setF]

	return new Set([...setF].filter((i) => setS.has(i)))
}

const setCover = (targets: string[], covering: Covering): string[] => {
	let uncoveredTargets = new Set(targets)
	const result: string[] = []

	const targetsConverted: [string, Set<string>][] = Object.entries(covering).map(([coverer, area]) => [
		coverer,
		new Set(area),
	])

	while (uncoveredTargets.size > 0) {
		let bestCover: Set<string> = new Set()
		let bestCoverer

		for (let [coverer, area] of targetsConverted) {
			const currentCover = setIntersection(uncoveredTargets, new Set(area))

			if (currentCover.size > bestCover.size) {
				bestCoverer = coverer
				bestCover = currentCover
			}
		}

		if (bestCoverer) result.push(bestCoverer)
		for (const covered of bestCover) {
			uncoveredTargets.delete(covered)
		}
	}

	return result
}

console.log(setCover(states, stations))
