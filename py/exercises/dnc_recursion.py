from typing import List, Any
import math


def rec_min_square(width: int, height: int) -> int:
    max_side = max(width, height)
    min_side = min(width, height)

    mod = max_side % min_side

    if max_side % min_side == 0:
        return min_side

    return rec_min_square(mod, min_side)


def rec_sum(arr: List[int]) -> int:
    length = len(arr)

    if length == 1:
        return arr[0]

    return arr[0] + rec_sum(arr[1:])


def rec_count(arr: List[Any]) -> int:
    if len(arr) == 1:
        return 1

    return 1 + rec_count((arr[1:]))


def rec_bin_search(arr: List[int], target: int, offset: int = 0) -> int:
    high = len(arr) - 1
    mid = math.ceil(high / 2)
    mid_item = arr[mid]

    if mid_item == target:
        return offset + mid

    if target > mid_item:
        return rec_bin_search(arr[mid:], target, offset + mid)
    else:
        return rec_bin_search(arr[:mid], target, offset)


print(rec_min_square(111, 6))
print(rec_sum([2, 4, 6]))
print(rec_count(list(range(10))))
print(rec_bin_search(list(range(1, 9)), 8))




