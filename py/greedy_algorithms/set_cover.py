from typing import Set, List, Dict
from math import inf

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
    covered = set()
    checked = []

    # while True:
    #
    #
    # for item in covering:
    #     item_targets = covering[item]

    for item, area in covering.items():
        print(item, area)
        best_item = ''


        covered = set()



    #
    # while len(covered) < len(targets):
    #     for target in covering[longest]:
    #         if
    #
    #     covered.update(covering[longest])
    #     checked.append(longest)
    #     print(longest)


    return targets


print(set_cover(target_states, stations))






