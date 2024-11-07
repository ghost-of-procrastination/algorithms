import math


def binary_serch(items, target):
    low = 0
    high = len(items) - 1

    while low <= high:
        mid = math.ceil((high + low) / 2)
        candidate = items[mid]

        if candidate == target:
            return mid

        if candidate > target:
            high = mid - 1
        else:
            low = mid + 1


print(binary_serch([1, 2, 3, 4, 5, 6, 7, 8], 6))
