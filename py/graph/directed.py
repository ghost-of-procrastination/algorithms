ENTRY = 'SLIPPERY'
DA = 'DASH'
ADA = 'AIR DASH'
MDA = 'MAD DASH'
FAT = 'FLASH AND THUNDERCLAP'
LNS = 'LEAD AND STEEL'
BD = 'BULLET DEFLECT'
FB = 'FINISHER: BLADERUNNER'
SN = 'SEEING DOUBLE'
TW = 'TAILWIND'

perks_graph = {
    ENTRY: [DA, LNS],
    DA: [ADA, MDA],
    LNS: [BD, FB, SN],
    MDA: [FAT],
    SN: [FAT],
    ADA: [TW],
    FAT: [],
    BD: [],
    FB: [],
    TW: [],
}
