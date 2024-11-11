export const ENTRY = 'SLIPPERY'
export const DA = 'DASH'
export const ADA = 'AIR DASH'
export const MDA = 'MAD DASH'
export const FAT = 'FLASH AND THUNDERCLAP'
export const LNS = 'LEAD AND STEEL'
export const BD = 'BULLET DEFLECT'
export const FB = 'FINISHER: BLADERUNNER'
export const SN = 'SEEING DOUBLE'
export const TW = 'TAILWIND'

export const perksGraph = {
	[ENTRY]: [DA, LNS],
	[DA]: [ADA, MDA],
	[LNS]: [BD, FB, SN],
	[MDA]: [FAT],
	[SN]: [FAT],
	[ADA]: [TW],
	[FAT]: [],
	[BD]: [],
	[FB]: [],
	[TW]: [],
}
