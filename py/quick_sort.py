from typing import List
import random


def quick_sort(arr: List[int]) -> List[int]:
    if len(arr) < 2:
        return arr
    else:
        pivot_index = random.randint(0, len(arr) - 1)
        pivot = arr[pivot_index]
        under, above = [], []

        for index, item in enumerate(arr):
            if pivot_index == index:
                continue
            if pivot >= item:
                under.append(item)
            else:
                above.append(item)

        return quick_sort(under) + [pivot] + quick_sort(above)


arr = random.sample(range(1, 101), 10)
print(quick_sort(arr))
