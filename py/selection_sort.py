import random
from typing import List, Tuple


def get_min_max(arr: List[int], target: int) -> Tuple[int, int]:
    value = arr[0]
    index = 0

    for i, item in enumerate(arr):
        if (target == 'max' and item > value) or (target == 'min' and item < value):
            value = item
            index = i

    return index, value


def selection_sort(arr: List[int], order: str ='desc') -> List[int]:
    result = []
    target = 'max' if order == 'desc' else 'min'

    while len(arr) > 0:
        max_index, _ = get_min_max(arr, target)
        result.append(arr.pop(max_index))

    return result


arr = random.sample(range(1, 101), 10)
print(selection_sort(arr, 'asc'))
