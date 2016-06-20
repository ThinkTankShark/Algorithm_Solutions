"""Implement quick sort in Python.
Input a list.
Output a sorted list."""
def quicksort(array):

   if len(array) <= 1:
       return array

   pivot_index = len(array) / 2
   pivot_value = array[pivot_index]
   before = []
   after = []

   for number in range(0, len(array)):
       if number != pivot_index:
            if array[number] <= pivot_value:
                before.append(array[number])
            else:
                after.append(array[number])

   return quicksort(before) + [pivot_value] + quicksort(after)

test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
print quicksort(test)
