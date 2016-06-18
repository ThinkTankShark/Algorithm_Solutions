#!/bin/python

import sys


n = int(raw_input().strip())
a = []
for a_i in xrange(n):
   a_temp = map(int,raw_input().strip().split(' '))
   a.append(a_temp)

# print a
first_sum = 0
second_sum = 0

for index, array in enumerate(a):
    #print (index, array)
    first_sum += array[index]

    #Reversing the array
    reversed_array = list(reversed(array))
    second_sum += reversed_array[index]
    #print reversed_array

print abs(first_sum - second_sum)

