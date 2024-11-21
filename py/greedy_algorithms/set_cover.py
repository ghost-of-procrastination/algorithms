from typing import List, Dict

MT = 'mt'
WA = 'wa'
OR = 'or'
ID = 'id'
NV = 'nv'
UT = 'ut'
CA = 'ca'
AZ = 'az'

target_states = [MT, WA, OR, ID, NV, UT, CA, AZ]
stations = {
    'kone': [ID, NV, UT],
    'ktwo': [WA, ID, MT],
    'kthree': [OR, NV, CA],
    'kfour': [NV, UT],
    'kfive': [CA, AZ]
}


def set_cover(targets: List[str], covering: Dict[str, List[str]]) -> List[str]:
    targets_uncovered = set(targets)
    result = set()

    covering_sets = {item: set(area) for item, area in covering.items()}

    while targets_uncovered:
        best_item = None
        covered = set()

        for item, area in covering_sets.items():
            covered_by_item = targets_uncovered & area

            if len(covered) < len(covered_by_item):
                best_item = item
                covered = covered_by_item

        targets_uncovered -= covered
        result.add(best_item)

    return list(result)


print(set_cover(target_states, stations))






