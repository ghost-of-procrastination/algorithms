from typing import List, Any


def get_min_square(width: int, height: int) -> int:
    max_side = max(width, height)
    min_side = min(width, height)

    mod = max_side % min_side

    if max_side % min_side == 0:
        return min_side

    return get_min_square(mod, min_side)


print(get_min_square(111, 6))

arr = [2, 4, 6]


def recursive_sum(arr: List[int]) -> int:
    length = len(arr)

    if length == 1:
        return arr[0]

    return arr[0] + recursive_sum(arr[1:])


print(recursive_sum(arr))


def items_count(arr: List[Any]) -> int:
    if len(arr) == 1:
        return 1

    return 1 + len(arr[1:])


print(items_count(arr))


def recurring_binary_search(arr: List[int], target: int) -> int:
    return arr

